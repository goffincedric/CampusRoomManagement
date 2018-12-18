import {Component, OnInit} from '@angular/core';
import {Campus} from '../../utils/Campus';
import {Floor} from '../../utils/Floor';
import {CampusFirebaseService} from '../services/campus-firebase.service';
import {FloorFirebaseService} from '../services/floor-firebase.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {
  private campuses: Campus[];

  currentCampus: Campus;
  currentFloors: Floor[];

  constructor(
    private campusService: CampusFirebaseService,
    private floorService: FloorFirebaseService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      console.log(params.get('slug'));
      return this.campusService.getCampusBySlug(params.get('slug'));
    }))
      .subscribe(
        campus => this.currentCampus = campus[0],
        error => console.log(error as string)
      );
    console.log('campuses1');
    this.campusService.getCampuses().subscribe(campuses => {
      console.log('campuses2');
      this.campuses = campuses;
      if (this.currentCampus === undefined) {
        this.currentCampus = campuses[0];
      }
      this.floorService.getFloorsByCampus(this.currentCampus.id).subscribe(floors => {
        this.currentFloors = floors;
      });
    });
  }

}
