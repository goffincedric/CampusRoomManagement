import {Component, Input, OnInit} from '@angular/core';
import {Floor} from '../../utils/Floor';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {RoomFirebaseService} from '../services/room-firebase.service';
import {Room} from '../../utils/Room';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {
  floors: Floor[];

  @Input()
  campusId: string;
  @Input()
  currentFloor: Floor;

  currentFloorIndex: number;
  currentRooms: Room[];

  constructor(private floorService: FloorFirebaseService, private roomService: RoomFirebaseService) {
    this.currentFloorIndex = 0;
  }

  ngOnInit() {
    this.floorService.getFloorsByCampus(this.campusId).subscribe(floors => {
      this.floors = floors;
      if (this.currentFloor === undefined) {
        this.currentFloor = this.floors[this.currentFloorIndex];
      }
      this.roomService.getRoomsByFloor(this.currentFloor.id).subscribe(rooms => {
        this.currentRooms = rooms;
      });
    });
  }

}
