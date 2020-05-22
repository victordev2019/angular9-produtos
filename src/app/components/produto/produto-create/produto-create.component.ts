import { Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';


@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    valor: null
  }
 
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createProduct(): void{
    this.produtoService.cadastrar(this.produto).subscribe(() =>{
      this.produtoService.showMessage('Produto criado!')
      this.router.navigate(['/produtos'])
    })
   
  }

  cancela(): void{
    this.router.navigate(['/produtos'])
  }
}
