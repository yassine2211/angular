import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverVolComponent } from './reserver-vol.component';

describe('ReserverVolComponent', () => {
  let component: ReserverVolComponent;
  let fixture: ComponentFixture<ReserverVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverVolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
