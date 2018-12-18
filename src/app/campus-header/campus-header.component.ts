import {Component, Input, OnInit} from '@angular/core';
import {Campus} from '../../utils/Campus';

@Component({
  selector: 'app-campus-header',
  templateUrl: './campus-header.component.html',
  styleUrls: ['./campus-header.component.scss']
})
export class CampusHeaderComponent implements OnInit {
  @Input()
  currentCampus: Campus;

  constructor() { }

  ngOnInit() {
  }

}
