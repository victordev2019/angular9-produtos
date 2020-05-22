import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ProdutoLeitura2Component } from './produto-leitura2.component';

describe('ProdutoLeitura2Component', () => {
  let component: ProdutoLeitura2Component;
  let fixture: ComponentFixture<ProdutoLeitura2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoLeitura2Component ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoLeitura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
