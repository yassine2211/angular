import { TestBed } from '@angular/core/testing';

import { VolReservationService } from './vol-reservation.service';

describe('VolReservationService', () => {
  let service: VolReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
