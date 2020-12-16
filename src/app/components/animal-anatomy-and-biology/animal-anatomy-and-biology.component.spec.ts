import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAnatomyAndBiologyComponent } from './animal-anatomy-and-biology.component';

describe('AnimalAnatomyAndBiologyComponent', () => {
  let component: AnimalAnatomyAndBiologyComponent;
  let fixture: ComponentFixture<AnimalAnatomyAndBiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAnatomyAndBiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAnatomyAndBiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
