import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambientes } from './ambientes';

describe('Ambientes', () => {
  let component: Ambientes;
  let fixture: ComponentFixture<Ambientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ambientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ambientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
