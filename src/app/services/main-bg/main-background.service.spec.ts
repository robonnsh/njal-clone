import { TestBed } from '@angular/core/testing';

import { MainBackgroundService } from './main-background.service';

describe('MainBackgroundService', () => {
  let service: MainBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
