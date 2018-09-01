import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianWeddingsComponent } from './indian-weddings.component';

describe('IndianWeddingsComponent', () => {
  let component: IndianWeddingsComponent;
  let fixture: ComponentFixture<IndianWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
