import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Campus} from '../../utils/Campus';
import {CampusFirebaseService} from '../services/campus-firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  private campusSubscription: Subscription = new Subscription();

  campuses: Campus[] = [];

  constructor(
    private campusService: CampusFirebaseService,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.campusSubscription = this.campusService.getCampuses().subscribe(campuses => this.campuses = campuses);
  }

  ngOnDestroy(): void {
    this.campusSubscription.unsubscribe();
  }
}
