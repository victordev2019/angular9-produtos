import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoLeituraComponent } from './produto-leitura.component';

describe('ProdutoLeituraComponent', () => {
  let component: ProdutoLeituraComponent;
  let fixture: ComponentFixture<ProdutoLeituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoLeituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
