import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBehaviorComponent } from './animal-behavior.component';

describe('AnimalBehaviorComponent', () => {
  let component: AnimalBehaviorComponent;
  let fixture: ComponentFixture<AnimalBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
