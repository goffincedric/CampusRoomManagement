import { TestBed } from '@angular/core/testing';

import { RoomFirebaseService } from './room-firebase.service';

describe('RoomFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomFirebaseService = TestBed.get(RoomFirebaseService);
    expect(service).toBeTruthy();
  });
});
