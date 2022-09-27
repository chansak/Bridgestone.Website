import { TestBed } from '@angular/core/testing';

import { VehicleprodResolver } from './vehicleprod.resolver';

describe('VehicleprodResolver', () => {
  let resolver: VehicleprodResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VehicleprodResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
