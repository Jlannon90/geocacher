import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocachesComponent } from './geocaches.component';

describe('GeocachesComponent', () => {
  let component: GeocachesComponent;
  let fixture: ComponentFixture<GeocachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
