import { TestBed } from '@angular/core/testing';

import { GitHttpService } from './git-http.service';

describe('GitHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHttpService = TestBed.get(GitHttpService);
    expect(service).toBeTruthy();
  });
});
