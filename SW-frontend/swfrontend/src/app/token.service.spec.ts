import { TestBed } from '@angular/core/testing';

import { ContainerService } from './container.service';

describe('containerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerService = TestBed.get(ContainerService);
    expect(service).toBeTruthy();
  });
});
