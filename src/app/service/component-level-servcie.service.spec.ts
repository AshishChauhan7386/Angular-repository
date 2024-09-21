import { TestBed } from '@angular/core/testing';

import { ComponentLevelServcieService } from './component-level-servcie.service';

describe('ComponentLevelServcieService', () => {
  let service: ComponentLevelServcieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLevelServcieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
