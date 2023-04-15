import { TestBed } from '@angular/core/testing';

import { SysLibService } from './sys-lib.service';

describe('SysLibService', () => {
  let service: SysLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
