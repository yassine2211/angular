import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDestinationsComponent } from './best-destinations.component';

describe('BestDestinationsComponent', () => {
  let component: BestDestinationsComponent;
  let fixture: ComponentFixture<BestDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
