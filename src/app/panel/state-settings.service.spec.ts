import { TestBed } from '@angular/core/testing';

import { StateSettingsService } from './state-settings.service';

describe('StateSettingsService', () => {
  let service: StateSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
