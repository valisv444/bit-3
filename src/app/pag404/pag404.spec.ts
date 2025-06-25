import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag404 } from './pag404';

describe('Pag404', () => {
  let component: Pag404;
  let fixture: ComponentFixture<Pag404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pag404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
