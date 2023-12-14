import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverOffreComponent } from './reserver-offre.component';

describe('ReserverOffreComponent', () => {
  let component: ReserverOffreComponent;
  let fixture: ComponentFixture<ReserverOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
