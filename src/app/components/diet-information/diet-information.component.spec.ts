import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietInformationComponent } from './diet-information.component';

describe('DietInformationComponent', () => {
  let component: DietInformationComponent;
  let fixture: ComponentFixture<DietInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
