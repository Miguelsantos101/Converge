import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoComponent } from './recepcao.component';

describe('RecepcaoComponent', () => {
  let component: RecepcaoComponent;
  let fixture: ComponentFixture<RecepcaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcaoComponent]
    });
    fixture = TestBed.createComponent(RecepcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
