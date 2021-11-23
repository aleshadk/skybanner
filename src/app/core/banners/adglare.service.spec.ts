import { TestBed } from '@angular/core/testing';

import { AdglareService } from './adglare.service';

describe('AdglareService', () => {
  let service: AdglareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdglareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
