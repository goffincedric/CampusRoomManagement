import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CampusFirebaseService} from '../../services/campus-firebase.service';
import {FloorFirebaseService} from '../../services/floor-firebase.service';
import {RoomFirebaseService} from '../../services/room-firebase.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of, Subject, Subscription} from 'rxjs';
import {Campus} from '../../../utils/Campus';
import {Floor} from '../../../utils/Floor';
import {Room} from '../../../utils/Room';

@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss']
})
export class FloorMapComponent implements OnInit, OnDestroy {
  private campusSubscription: Subscription;
  private floorSubscription: Subscription;
  private roomSubscription: Subscription;

  campuses: Campus[] = [];
  floors: Floor[] = [];
  floorNumbers: number[] = [];
  currentRooms: Room[] = [];
  currentCampus: Campus = new Campus('', '', '');
  currentFloor: Floor = new Floor('', 0, '');

  colStyle = '1fr';

  isPersonnel = false;
  showsRoomName = true;
  showsRoomStatus = true;
  showsRoomType = true;
  showsRoomCapacity = false;
  showsRoomBeamer = false;

  showsDetails = new Subject<boolean>();

  constructor(
    private campusService: CampusFirebaseService,
    private floorService: FloorFirebaseService,
    private roomService: RoomFirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.campusService.getCampusBySlug(params.get('slug')))).subscribe(campus => {
      this.currentCampus = campus[0];
      this.floorSubscription = this.floorService.getFloorsByCampus(this.currentCampus.id).subscribe(floors => {
        this.route.paramMap.pipe(switchMap((params: ParamMap) => of(+params.get('floorNumber')))).subscribe(floorNumber => {
          this.floors = floors;
          this.floorNumbers = this.floors.map(floor => floor.floorNumber);
          this.currentFloor = this.floors.filter(floor => floor.floorNumber === floorNumber)[0];
          this.roomSubscription = this.roomService.getRoomsByFloor(this.currentFloor.id).subscribe(rooms => {
            this.currentRooms = rooms;
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

    this.isPersonnel = (localStorage.getItem('isPersonnel') !== null) ? JSON.parse(localStorage.getItem('isPersonnel')) : false;
    this.showsRoomName = (localStorage.getItem('showsRoomName') !== null) ? JSON.parse(localStorage.getItem('showsRoomName')) : true;
    this.showsRoomStatus = (localStorage.getItem('showsRoomStatus') !== null) ? JSON.parse(localStorage.getItem('showsRoomStatus')) : true;
    this.showsRoomType = (localStorage.getItem('showsRoomType') !== null) ? JSON.parse(localStorage.getItem('showsRoomType')) : true;
    this.showsRoomCapacity = (localStorage.getItem('showsRoomCapacity') !== null) ? JSON.parse(localStorage.getItem('showsRoomCapacity')) : false;
    this.showsRoomBeamer = (localStorage.getItem('showsRoomBeamer') !== null) ? JSON.parse(localStorage.getItem('showsRoomBeamer')) : false;
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
  onFloorMapResize(event) {
    if (window.innerWidth < 768) {
      this.route.url.subscribe(segments => {
        let newUrl = '/';
        segments.forEach(segment => {
          if (segment.path.toLowerCase() === 'map') {
            newUrl += 'list/';
          } else {
            newUrl += segment.path.toLowerCase() + '/';
          }
        });
        this.router.navigate([newUrl]);
      });
    }
  }
}
