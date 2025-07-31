import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dockers } from './dockers';

describe('Dockers', () => {
  let component: Dockers;
  let fixture: ComponentFixture<Dockers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dockers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dockers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
