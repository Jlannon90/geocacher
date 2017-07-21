import { TestBed, inject } from '@angular/core/testing';

import { GeocodingApiLocationService } from './geocoding-api-location.service';

describe('GeocodingApiLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodingApiLocationService]
    });
  });

  it('should ...', inject([GeocodingApiLocationService], (service: GeocodingApiLocationService) => {
    expect(service).toBeTruthy();
  }));
});
