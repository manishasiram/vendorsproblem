import { TestBed, inject } from '@angular/core/testing';

import { VendorserviceService } from './vendorservice.service';

describe('VendorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorserviceService]
    });
  });

  it('should be created', inject([VendorserviceService], (service: VendorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
