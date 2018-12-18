import {Component, Input, OnInit} from '@angular/core';
import {Floor} from '../../utils/Floor';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {RoomFirebaseService} from '../services/room-firebase.service';
import {Room} from '../../utils/Room';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {
  @Input()
  campusId: string;
  @Input()
  floors: Floor[];
  @Input()
  currentFloor: Floor;

  currentFloorIndex: number;
  currentRooms: Room[];

  constructor(
    private floorService: FloorFirebaseService,
    private roomService: RoomFirebaseService,
    private route: ActivatedRoute) {
    this.currentFloorIndex = 0;
  }

  ngOnInit() {
    if (this.route.firstChild !== null) {
      this.route.firstChild.paramMap.pipe(switchMap((params: ParamMap) => {
        return of(+params.get('floorIndex'));
      }))
        .subscribe(
          floorIndex => {
            console.log(floorIndex);
            this.currentFloorIndex = floorIndex;
            this.initRooms();
          },
          error => console.log(error as string)
        );
    }

    if (this.floors === undefined) {
      this.floorService.getFloorsByCampus(this.campusId).subscribe(floors => {
        this.floors = floors;
        this.initRooms();
      });
    } else {
      this.initRooms();
    }
  }

  private initRooms() {
    if (this.currentFloor === undefined) {
      this.currentFloor = this.floors[this.currentFloorIndex];
    }
    this.roomService.getRoomsByFloor(this.currentFloor.id).subscribe(rooms => {
      this.currentRooms = rooms;
    });
  }
}
