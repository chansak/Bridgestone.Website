import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdemandComponent } from './salesdemand.component';

describe('SalesdemandComponent', () => {
  let component: SalesdemandComponent;
  let fixture: ComponentFixture<SalesdemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
