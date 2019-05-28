import { TestBed } from '@angular/core/testing';

import { ErrorFormatterService } from './error-formatter.service';

describe('ErrorFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorFormatterService = TestBed.get(ErrorFormatterService);
    expect(service).toBeTruthy();
  });
});
