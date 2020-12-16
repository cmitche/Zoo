import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificNameAndClassComponent } from './scientific-name-and-class.component';

describe('ScientificNameAndClassComponent', () => {
  let component: ScientificNameAndClassComponent;
  let fixture: ComponentFixture<ScientificNameAndClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificNameAndClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificNameAndClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
