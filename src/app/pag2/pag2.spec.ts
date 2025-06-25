import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag2 } from './pag2';

describe('Pag2', () => {
  let component: Pag2;
  let fixture: ComponentFixture<Pag2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pag2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
