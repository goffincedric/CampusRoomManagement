import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
