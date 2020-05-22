import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-leitura',
  templateUrl: './produto-leitura.component.html',
  styleUrls: ['./produto-leitura.component.css']
})
export class ProdutoLeituraComponent implements OnInit {

  produtos: Produto[]

  displayedColumns : ['id', 'nome' , 'valor']
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.leitura().subscribe(produtos =>{
      this.produtos = produtos
      console.log(produtos);
      
    })
  }

}
