import { Component } from '@angular/core';
import {Floor} from '../utils/Floor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Campus';
  floorNumber: number;
  floors: Floor[];

  constructor() {
    this.floorNumber = 0;
  }
}
