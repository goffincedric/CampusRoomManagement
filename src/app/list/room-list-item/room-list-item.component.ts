import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../../utils/Room';
import {Subject} from 'rxjs';
import {RoomFirebaseService} from '../../services/room-firebase.service';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {RoomType} from '../../../utils/RoomType';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {
  private percentColors = [
    {pct: 0.0, color: {r: 0x32, g: 0xcd, b: 0x32}},
    {pct: 0.5, color: {r: 0xf4, g: 0xd8, b: 0x00}},
    {pct: 1.0, color: {r: 0xff, g: 0x45, b: 0x2b}}
  ];
  hasCrowdedness = false;
  hasOccupied = false;

  _showsDetails = false;
  _showsDetailsTimeoutId = 0;

  @Input() room: Room;
  @Input() isPersonnel = true;
  @Input() showsRoomName = true;
  @Input() showsRoomStatus = true;
  @Input() showsRoomType = true;
  @Input() showsRoomCapacity = false;
  @Input() showsRoomBeamer = false;

  @Input() showsDetails: Subject<boolean>;

  @Output() hideOtherRoomClicks: EventEmitter<boolean> = new EventEmitter<boolean>();

  countdownString = '';
  private reservedUntil: Date;

  hoursSelected = 0;

  // Crowdedness model for debounce time
  crowdednessModelChanged: Subject<string> = new Subject<string>();

  constructor(
    private roomService: RoomFirebaseService,
    private router: Router
  ) {
    // Set crowdedness slider event
    this.crowdednessModelChanged.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(crowdedness => roomService.updateRoomCrowdedness(this.room.id, +crowdedness));
  }

  ngOnInit() {
    switch (this.room.type) {
      case RoomType.CAFETARIA:
      case RoomType.STUDY_HALL:
        this.hasCrowdedness = true;
        break;
      case RoomType.AUDITORIUM:
      case RoomType.CLASSROOM:
      case RoomType.MEETING_ROOM:
      case RoomType.OFFICE:
        this.hasOccupied = true;
        break;
    }

    this.reservedUntil = new Date(this.room.reservedUntil);
    if (this.room.occupied) {
      this.countDown();
    }

    this.showsDetails.subscribe(newValue => {
      this._showsDetails = newValue;
    });
  }

  getColorForPercentage(pct: number) {
    let i;
    for (i = 1; i < this.percentColors.length - 1; i++) {
      if (pct <= this.percentColors[i].pct) {
        break;
      }
    }
    const lower = this.percentColors[i - 1];
    const upper = this.percentColors[i];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
  }

  countDown() {
    setTimeout(() => {
      const now = new Date(Date.now());
      if (this.reservedUntil > now) {
        const totalSeconds = (this.reservedUntil.getTime() - now.getTime()) / 1000;
        const hours = Math.floor(totalSeconds / 60 / 60) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const secs = Math.floor(totalSeconds) % 60;
        this.countdownString = this.padNumber(hours) + ':' + this.padNumber(mins) + ':' + this.padNumber(secs);
        this.countDown();
      } else {
        this.roomService.unreserveRoom(this.room.id);
      }
    }, 1000);
  }

  padNumber(num) {
    return ((num < 10) ? '0' : '') + num;
  }

  onReserve() {
    if (this.hoursSelected > 0) {
      this.roomService.reserveRoom(this.room.id, +this.hoursSelected);
    }
  }

  changeCrowdedness(event) {
    this.room.crowdedness = event;
    this.crowdednessModelChanged.next(event);
  }

  viewDetails() {
    this.router.navigate(['/room/detail/' + this.room.id]);
  }

  onRoomClick() {
    clearTimeout(this._showsDetailsTimeoutId);
    this.hideOtherRoomClicks.emit();
    this._showsDetails = true;
    this._showsDetailsTimeoutId = setTimeout(() => this._showsDetails = false, 5000);
  }
}
