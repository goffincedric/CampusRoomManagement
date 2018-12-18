import { TestBed } from '@angular/core/testing';

import { FloorFirebaseService } from './floor-firebase.service';

describe('FloorFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloorFirebaseService = TestBed.get(FloorFirebaseService);
    expect(service).toBeTruthy();
  });
});
