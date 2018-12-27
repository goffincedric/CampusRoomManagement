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
  }

  onShowAll() {
    this.showsAll = !this.showsAll;

    this.isPersonnel = this.showsAll;
    this.showsRoomName = this.showsAll;
    this.showsRoomStatus = this.showsAll;
    this.showsRoomType = this.showsAll;
    this.showsRoomCapacity = this.showsAll;
    this.showsRoomBeamer = this.showsAll;

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

  onChangePersonnel() {
    this.isPersonnel = !this.isPersonnel;
    this.changePersonnel.emit(this.isPersonnel);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomName() {
    this.showsRoomName = !this.showsRoomName;
    this.showRoomName.emit(this.showsRoomName);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomStatus() {
    this.showsRoomStatus = !this.showsRoomStatus;
    this.showRoomStatus.emit(this.showsRoomStatus);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomType() {
    this.showsRoomType = !this.showsRoomType;
    this.showRoomType.emit(this.showsRoomType);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomCapacity() {
    this.showsRoomCapacity = !this.showsRoomCapacity;
    this.showRoomCapacity.emit(this.showsRoomCapacity);
    this.showsAll = this.checkShowHideAll();
  }

  onShowRoomBeamer() {
    this.showsRoomBeamer = !this.showsRoomBeamer;
    this.showRoomBeamer.emit(this.showsRoomBeamer);
    this.showsAll = this.checkShowHideAll();
  }

  @HostListener('window:resize', ['$event'])
  onMenuResize() {
    this.screenWidth = window.innerWidth;
  }
}
