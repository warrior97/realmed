import { TestBed } from '@angular/core/testing';

import { FaceServiceService } from './face-service.service';

describe('FaceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceServiceService = TestBed.get(FaceServiceService);
    expect(service).toBeTruthy();
  });
});
