import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSituacaoComponent } from './consultar-situacao.component';

describe('ConsultarSituacaoComponent', () => {
  let component: ConsultarSituacaoComponent;
  let fixture: ComponentFixture<ConsultarSituacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarSituacaoComponent]
    });
    fixture = TestBed.createComponent(ConsultarSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
