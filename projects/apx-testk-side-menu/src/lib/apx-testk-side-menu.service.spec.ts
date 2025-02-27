import { TestBed } from '@angular/core/testing';

import { ApxTestkSideMenuService } from './apx-testk-side-menu.service';

describe('ApxTestkSideMenuService', () => {
  let service: ApxTestkSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApxTestkSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
