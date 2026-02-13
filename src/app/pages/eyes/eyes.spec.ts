import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eyes } from './eyes';

describe('Eyes', () => {
  let component: Eyes;
  let fixture: ComponentFixture<Eyes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eyes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eyes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
