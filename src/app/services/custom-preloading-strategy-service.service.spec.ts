import { TestBed } from '@angular/core/testing';

import { CustomPreloadingStrategyServiceService } from './custom-preloading-strategy-service.service';

describe('CustomPreloadingStrategyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadingStrategyServiceService = TestBed.get(CustomPreloadingStrategyServiceService);
    expect(service).toBeTruthy();
  });
});
