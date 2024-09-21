import { TestBed } from '@angular/core/testing';

import { CustomproviderService } from './customprovider.service';

describe('CustomproviderService', () => {
  let service: CustomproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
