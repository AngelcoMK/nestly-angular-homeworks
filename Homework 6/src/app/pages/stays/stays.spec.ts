import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stays } from './stays';

describe('Stays', () => {
  let component: Stays;
  let fixture: ComponentFixture<Stays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stays],
    }).compileComponents();

    fixture = TestBed.createComponent(Stays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
