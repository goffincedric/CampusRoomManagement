import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../utils/Room';
import {RoomType} from '../../utils/RoomType';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  private percentColors = [
    {pct: 0.0, color: {r: 0x32, g: 0xcd, b: 0x32}},
    {pct: 0.5, color: {r: 0xf4, g: 0xd8, b: 0x00}},
    {pct: 1.0, color: {r: 0xff, g: 0x45, b: 0x2b}}
  ];

  crowdedRgbString: string;
  hasCrowdedness = false;
  hasOccupied = false;

  @Input() room: Room;
  @Input() isList = false;

  constructor() {
  }

  ngOnInit() {
    this.crowdedRgbString = this.getColorForPercentage(1 / this.room.capacity * this.room.crowdedness);
    switch (this.room.type) {
      case RoomType.CAFETARIA:
      case RoomType.STUDIELANDSCHAP:
        this.hasCrowdedness = true;
        break;
      case RoomType.AULA:
      case RoomType.VERGADERZAAL:
      case RoomType.BUREAU:
      case RoomType.KLASLOKAAL:
        this.hasOccupied = true;
    }
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

  onRoomClick(event: Event) {
    // const template = $('#template').html();
    // let compiled = dust.compile(template, 'room-checkin');
    // dust.loadSource(compiled);
    // $('.reservation-details-container').addClass('expand');
    // dust.render('room-checkin', {}, function(err, out) {
    //   $('.room-reservation').append(out);
    //   $(out).fadeIn(function(){
    //     $('.room-check-in').css({left: '0', opacity: '1'});
    //   });
    // });
  }
}
