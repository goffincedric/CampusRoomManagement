import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHeaderComponent } from './campus-header.component';

describe('CampusHeaderComponent', () => {
  let component: CampusHeaderComponent;
  let fixture: ComponentFixture<CampusHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
