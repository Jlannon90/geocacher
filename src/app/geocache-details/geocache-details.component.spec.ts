import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheDetailsComponent } from './geocache-details.component';

describe('GeocacheDetailsComponent', () => {
  let component: GeocacheDetailsComponent;
  let fixture: ComponentFixture<GeocacheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
