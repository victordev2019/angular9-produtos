import { DialogService } from './../../../shared/dialog.service';
import { Produto } from './../produto.model';
import { Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produto-leitura',
  templateUrl: './produto-leitura.component.html',
  styleUrls: ['./produto-leitura.component.css']
})
export class ProdutoLeituraComponent implements OnInit {

  produtos: Produto[]
  
  displayedColumns = ['id', 'nome', 'valor', 'acao'];
 
  constructor(private produtoService: ProdutoService, private router: Router, private dialoService: DialogService) { }

  ngOnInit(): void {
    this.produtoService.leitura().subscribe(produtos =>{
      this.produtos = produtos
      console.log(produtos);
      
    })
  }
  deletarProduto(){
    this.dialoService.openConfirmDialog();
  }
  
  
  }


