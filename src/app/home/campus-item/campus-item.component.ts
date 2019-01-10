import {Component, Input, OnInit} from '@angular/core';
import {Campus} from '../../../utils/Campus';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campus-item',
  templateUrl: './campus-item.component.html',
  styleUrls: ['./campus-item.component.scss']
})
export class CampusItemComponent implements OnInit {
  @Input() campus: Campus;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onCampusClick() {
    this.router.navigate(['/list/' + this.campus.slugUrl + '/0']);
  }
}
