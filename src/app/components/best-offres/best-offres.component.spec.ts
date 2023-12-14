import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOffresComponent } from './best-offres.component';

describe('BestOffresComponent', () => {
  let component: BestOffresComponent;
  let fixture: ComponentFixture<BestOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
