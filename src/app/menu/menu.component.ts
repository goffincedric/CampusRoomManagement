import {Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
