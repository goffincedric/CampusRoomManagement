import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {of, Subject, Subscription} from 'rxjs';
import {Campus} from '../../utils/Campus';
import {Floor} from '../../utils/Floor';
import {Room} from '../../utils/Room';
import {CampusFirebaseService} from '../services/campus-firebase.service';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {RoomFirebaseService} from '../services/room-firebase.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-floor-layout',
  templateUrl: './floor-layout.component.html',
  styleUrls: ['./floor-layout.component.scss']
})
export class FloorLayoutComponent implements OnInit, OnDestroy {
  private campusSubscription: Subscription = new Subscription();
  private floorSubscription: Subscription = new Subscription();
  private roomSubscription: Subscription = new Subscription();

  campuses: Campus[] = [];
  floors: Floor[] = [];
  floorNumbers: number[] = [];
  currentRooms: Room[] = [];
  currentCampus: Campus = new Campus('', '', '');
  currentFloor: Floor = new Floor('', 0, '');

  isPersonnel = false;
  showsRoomName = true;
  showsRoomStatus = true;
  showsRoomType = true;
  showsRoomCapacity = false;
  showsRoomBeamer = false;

  showsDetails = new Subject<boolean>();

  colStyle = '1fr';

  isListLayout = true;

  constructor(
    private campusService: CampusFirebaseService,
    private floorService: FloorFirebaseService,
    private roomService: RoomFirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.onFloorMapResize();

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.has('layoutType')) {
          switch (params.get('layoutType').toLowerCase()) {
            case 'list':
              this.isListLayout = true;
              break;
            case 'map':
              this.isListLayout = false;
              break;
            default:
              let newUrl = '/';
              this.route.url.forEach(segments => {
                segments.forEach(segment => {
                  if (segments.indexOf(segment) > 0) {
                    newUrl += segment.path + '/';
                  } else {
                    newUrl += 'list/';
                  }
                });
              });
              this.router.navigate([newUrl]);
              break;
          }
        }
        return this.campusService.getCampusBySlug(params.get('slug'));
      })
    ).subscribe(campus => {
      this.currentCampus = campus[0];
      this.floorSubscription = this.floorService.getFloorsByCampus(this.currentCampus.id).subscribe(floors => {
        this.route.paramMap.pipe(switchMap((params: ParamMap) => of(+params.get('floorNumber')))).subscribe(floorNumber => {
          this.floors = floors;
          this.floorNumbers = this.floors.map(floor => floor.floorNumber);
          this.currentFloor = this.floors.filter(floor => floor.floorNumber === floorNumber)[0];
          this.roomSubscription = this.roomService.getRoomsByFloor(this.currentFloor.id).subscribe(rooms => {
            this.currentRooms = rooms;
            this.currentRooms.sort();
            const colAmount = Math.max(...rooms.map(room => room.x + room.width - 1));
            let colStyleText = '';
            for (let i = 0; i < colAmount; i++) {
              colStyleText += '1fr ';
            }
            this.colStyle = colStyleText;
          });
        });
      });
    });

    this.campusSubscription = this.campusService.getCampuses().subscribe(campuses => {
      this.campuses = campuses;
    });
  }

  ngOnDestroy(): void {
    this.campusSubscription.unsubscribe();
    this.floorSubscription.unsubscribe();
    this.roomSubscription.unsubscribe();
  }

  changePersonnel(event) {
    this.isPersonnel = event;
  }

  changeRoomName(event) {
    this.showsRoomName = event;
  }

  changeRoomStatus(event) {
    this.showsRoomStatus = event;
  }

  changeRoomType(event) {
    this.showsRoomType = event;
  }

  changeRoomCapacity(event) {
    this.showsRoomCapacity = event;
  }

  changeRoomBeamer(event) {
    this.showsRoomBeamer = event;
  }

  hideOtherRoomClicks() {
    this.showsDetails.next(false);
  }

  @HostListener('window:resize', ['$event'])
  onFloorMapResize() {
    if (window.innerWidth < 768) {
      let newUrl = '/';
      this.route.url.forEach(segments => {
        segments.forEach(segment => {
          if (segment.path.toLowerCase() === 'map') {
            newUrl += 'list/';
          } else {
            newUrl += segment.path.toLowerCase() + '/';
          }
        });
      });
      this.router.navigate([newUrl]);
    }
  }

}
