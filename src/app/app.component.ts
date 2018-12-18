import {Component, OnInit} from '@angular/core';
import {Campus} from '../utils/Campus';
import {CampusFirebaseService} from './services/campus-firebase.service';
import {Floor} from '../utils/Floor';
import {FloorFirebaseService} from './services/floor-firebase.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
