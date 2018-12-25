import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Campus} from '../../utils/Campus';
import {Floor} from '../../utils/Floor';
import {of, Subject} from 'rxjs';

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
  currentFloorNumbers: number[];
  @Input()
  currentFloorNumber: number;
  @Input()
  showSettings = false;

  @Output() changePersonnel: EventEmitter<boolean> = new EventEmitter<boolean>();

  isPersonnel = false;
  screenWidth = window.innerWidth;

  constructor() {
  }

  ngOnInit() {
  }

  onChangePersonnel() {
    this.isPersonnel = !this.isPersonnel;
    this.changePersonnel.emit(this.isPersonnel);
  }

  @HostListener('window:resize', ['$event'])
  onMenuResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
