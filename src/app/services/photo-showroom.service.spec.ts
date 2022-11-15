import { TestBed } from '@angular/core/testing';

import { PhotoShowroomService } from './photo-showroom.service';

describe('PhotoShowroomService', () => {
  let service: PhotoShowroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoShowroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
