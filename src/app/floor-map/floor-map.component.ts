import {Component, HostListener, OnInit} from '@angular/core';
import {CampusFirebaseService} from '../services/campus-firebase.service';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {RoomFirebaseService} from '../services/room-firebase.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Campus} from '../../utils/Campus';
import {Floor} from '../../utils/Floor';
import {Room} from '../../utils/Room';

@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss']
})
export class FloorMapComponent implements OnInit {
  campuses: Campus[] = [];
  floors: Floor[] = [];
  currentRooms: Room[] = [];
  currentCampus: Campus = new Campus('', '', '');
  currentFloor: Floor = new Floor('', 0, '');

  colStyle = '1fr';

  isPersonnel = false;

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
      this.floorService.getFloorsByCampus(this.currentCampus.id).subscribe(floors => {
        this.floors = floors;
        this.route.paramMap.pipe(switchMap((params: ParamMap) => of(+params.get('floorIndex')))).subscribe(floorIndex => {
          this.currentFloor = floors[floorIndex];
          this.roomService.getRoomsByFloor(this.currentFloor.id).subscribe(rooms => {
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

    this.campusService.getCampuses().subscribe(campuses => {
      this.campuses = campuses;
    });
  }

  changePersonnel(event) {
    this.isPersonnel = event;
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
