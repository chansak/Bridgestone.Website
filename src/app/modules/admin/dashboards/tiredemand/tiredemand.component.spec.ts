import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiredemandComponent } from './tiredemand.component';

describe('TiredemandComponent', () => {
  let component: TiredemandComponent;
  let fixture: ComponentFixture<TiredemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiredemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiredemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
