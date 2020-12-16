import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatingAndReproductiveInfoComponent } from './mating-and-reproductive-info.component';

describe('MatingAndReproductiveInfoComponent', () => {
  let component: MatingAndReproductiveInfoComponent;
  let fixture: ComponentFixture<MatingAndReproductiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatingAndReproductiveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatingAndReproductiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
