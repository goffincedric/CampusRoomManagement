import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Campus} from '../../utils/Campus';
import {CampusFirebaseService} from '../services/campus-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private campusSubscription: Subscription = new Subscription();

  campuses: Campus[] = [];

  constructor(
    private campusService: CampusFirebaseService
  ) {
  }

  ngOnInit() {
    this.campusSubscription = this.campusService.getCampuses().subscribe(campuses => {
      console.log(campuses);
      this.campuses = campuses;
    });
  }

  ngOnDestroy(): void {
    this.campusSubscription.unsubscribe();
  }
}
