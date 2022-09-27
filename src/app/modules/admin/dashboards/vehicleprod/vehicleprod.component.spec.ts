import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleprodComponent } from './vehicleprod.component';

describe('VehicleprodComponent', () => {
  let component: VehicleprodComponent;
  let fixture: ComponentFixture<VehicleprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
