import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Campus} from '../../utils/Campus';
import {Floor} from '../../utils/Floor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  campuses: Campus[];
  @Input()
  currentCampus: Campus;
  @Input()
  currentFloors: Floor[];
  @Input()
  currentFloorIndex: number;
  @Input()
  showSettings = false;

  @Output() changePersonnel: EventEmitter<boolean> = new EventEmitter<boolean>();

  isPersonnel = false;

  constructor() { }

  ngOnInit() {
  }

  onChangePersonnel() {
    this.isPersonnel = !this.isPersonnel;
    this.changePersonnel.emit(this.isPersonnel);
  }
}
