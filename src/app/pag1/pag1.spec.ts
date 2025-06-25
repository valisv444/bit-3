import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag1 } from './pag1';

describe('Pag1', () => {
  let component: Pag1;
  let fixture: ComponentFixture<Pag1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pag1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
