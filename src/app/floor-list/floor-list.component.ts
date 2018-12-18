import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from '../services/room.service';
import {FloorService} from '../services/floor.service';
import {Floor} from '../../utils/Floor';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {RoomFirebaseService} from '../services/room-firebase.service';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {

  floors: Floor[];
  currentFloorIndex: number;
  @Input()
  currentFloor: Floor;

  constructor(private floorService: FloorFirebaseService, private roomService: RoomFirebaseService) {
    this.currentFloorIndex = 0;
  }

  ngOnInit() {
    this.floorService.getFloors().subscribe(floors => {
      this.floors = floors;
      if (this.currentFloor === undefined) {
        this.currentFloor = floors[this.currentFloorIndex];
      }
    });
  }

}
