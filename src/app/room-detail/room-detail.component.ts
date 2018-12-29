import {Component, OnInit} from '@angular/core';
import {RoomFirebaseService} from '../services/room-firebase.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {Room} from '../../utils/Room';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {CampusFirebaseService} from '../services/campus-firebase.service';
import {Campus} from '../../utils/Campus';
import {RoomType} from '../../utils/RoomType';
import {Floor} from '../../utils/Floor';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  room: Room = new Room('', '', '', RoomType.STUDY_HALL, 0, false, false, 0, '', 0, 0, 0, 0, '');
  roomTypes = Object.keys(RoomType).map(roomType => RoomType[roomType] as string).sort();
  campus: Campus = new Campus('', 'Campus', '');
  floor: Floor = new Floor('', 0, '');

  constructor(
    private roomService: RoomFirebaseService,
    private floorService: FloorFirebaseService,
    private campusService: CampusFirebaseService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.roomService.getRoom(params.get('id'));
      })
    ).subscribe(room => {
      this.room = room;
      this.floorService.getFloor(room.floorId).subscribe(floor => {
          this.floor = floor;
          this.campusService.getCampus(floor.campusId).subscribe(campus => this.campus = campus);
        }
      );
    });
  }

  setRoomType(event) {
    this.room.type = event.target.value;
  }

  goBack() {
    this.location.back();
  }

  saveRoom() {
    this.roomService.updateRoom(this.room)
      .then(() => this.router.navigate(['/list/campus/' + this.campus.slugUrl + '/floor/' + this.floor.floorNumber]));
  }
}
