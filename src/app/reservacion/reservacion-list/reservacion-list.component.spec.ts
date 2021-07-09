import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionListComponent } from './reservacion-list.component';

describe('ReservacionListComponent', () => {
  let component: ReservacionListComponent;
  let fixture: ComponentFixture<ReservacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
