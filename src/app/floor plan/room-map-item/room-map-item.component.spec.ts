import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMapItemComponent } from './room-map-item.component';

describe('RoomMapItemComponent', () => {
  let component: RoomMapItemComponent;
  let fixture: ComponentFixture<RoomMapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMapItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
