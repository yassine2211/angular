import { TestBed } from '@angular/core/testing';

import { OffreReservationService } from './offre-reservation.service';

describe('OffreReservationService', () => {
  let service: OffreReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
