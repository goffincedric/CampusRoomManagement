import { TestBed } from '@angular/core/testing';

import { CampusFirebaseService } from './campus-firebase.service';

describe('CampusFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampusFirebaseService = TestBed.get(CampusFirebaseService);
    expect(service).toBeTruthy();
  });
});
