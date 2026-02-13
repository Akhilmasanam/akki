import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smile } from './smile';

describe('Smile', () => {
  let component: Smile;
  let fixture: ComponentFixture<Smile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
