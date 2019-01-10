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
  campuses: Campus[] = [];
  @Input()
  currentCampus: Campus;
  @Input()
  currentFloors: Floor[] = [];
  @Input()
  currentFloorNumbers: number[];
  @Input()
  currentFloorNumber: number;
  @Input()
  hideSettings = false;

  @Output() changePersonnel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showRoomName: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showRoomStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showRoomType: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showRoomCapacity: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showRoomBeamer: EventEmitter<boolean> = new EventEmitter<boolean>();

  showsAll = false;
  isPersonnel = false;
  showsRoomName = true;
  showsRoomStatus = true;
  showsRoomType = true;
  showsRoomCapacity = false;
  showsRoomBeamer = false;
  screenWidth = window.innerWidth;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('isPersonnel') !== null) {
      this.onChangePersonnel(JSON.parse(localStorage.getItem('isPersonnel'))) ;
    }
    if (localStorage.getItem('showsRoomName') !== null) {
      this.onShowRoomName(JSON.parse(localStorage.getItem('showsRoomName'))) ;
    }
    if (localStorage.getItem('showsRoomStatus') !== null) {
      this.onShowRoomStatus(JSON.parse(localStorage.getItem('showsRoomStatus'))) ;
    }
    if (localStorage.getItem('showsRoomType') !== null) {
      this.onShowRoomType(JSON.parse(localStorage.getItem('showsRoomType'))) ;
    }
    if (localStorage.getItem('showsRoomCapacity') !== null) {
      this.onShowRoomCapacity(JSON.parse(localStorage.getItem('showsRoomCapacity'))) ;
    }
    if (localStorage.getItem('showsRoomBeamer') !== null) {
      this.onShowRoomBeamer(JSON.parse(localStorage.getItem('showsRoomBeamer'))) ;
    }
  }

  onShowAll(event) {
    this.showsAll = event;

    this.isPersonnel = this.showsAll;
    localStorage.setItem('isPersonnel', `${this.showsAll}`);
    this.showsRoomName = this.showsAll;
    localStorage.setItem('showsRoomName', `${this.showsAll}`);
    this.showsRoomStatus = this.showsAll;
    localStorage.setItem('showsRoomStatus', `${this.showsAll}`);
    this.showsRoomType = this.showsAll;
    localStorage.setItem('showsRoomType', `${this.showsAll}`);
    this.showsRoomCapacity = this.showsAll;
    localStorage.setItem('showsRoomCapacity', `${this.showsAll}`);
    this.showsRoomBeamer = this.showsAll;
    localStorage.setItem('showsRoomBeamer', `${this.showsAll}`);

    this.changePersonnel.emit(this.isPersonnel);
    this.showRoomName.emit(this.showsRoomName);
    this.showRoomStatus.emit(this.showsRoomStatus);
    this.showRoomType.emit(this.showsRoomType);
    this.showRoomCapacity.emit(this.showsRoomCapacity);
    this.showRoomBeamer.emit(this.showsRoomBeamer);
  }

  checkShowHideAll(): boolean {
    return (
      this.isPersonnel &&
      this.showsRoomName &&
      this.showsRoomStatus &&
      this.showsRoomType &&
      this.showsRoomCapacity &&
      this.showsRoomBeamer
    );
  }

  onChangePersonnel(event) {
    this.isPersonnel = event;
    localStorage.setItem('isPersonnel', `${this.isPersonnel}`);
    this.changePersonnel.emit(this.isPersonnel);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomName(event) {
    this.showsRoomName = event;
    localStorage.setItem('showsRoomName', `${this.showsRoomName}`);
    this.showRoomName.emit(this.showsRoomName);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomStatus(event) {
    this.showsRoomStatus = event;
    localStorage.setItem('showsRoomStatus', `${this.showsRoomStatus}`);
    this.showRoomStatus.emit(this.showsRoomStatus);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomType(event) {
    this.showsRoomType = event;
    localStorage.setItem('showsRoomType', `${this.showsRoomType}`);
    this.showRoomType.emit(this.showsRoomType);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomCapacity(event) {
    this.showsRoomCapacity = event;
    localStorage.setItem('showsRoomCapacity', `${this.showsRoomCapacity}`);
    this.showRoomCapacity.emit(this.showsRoomCapacity);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomBeamer(event) {
    this.showsRoomBeamer = event;
    localStorage.setItem('showsRoomBeamer', `${this.showsRoomBeamer}`);
    this.showRoomBeamer.emit(this.showsRoomBeamer);
    this.showsAll = this.checkShowHideAll();
  }

  @HostListener('window:resize', ['$event'])
  onMenuResize() {
    this.screenWidth = window.innerWidth;
  }
}
