import { Produto } from './../produto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  produto: Produto;
  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.produtoService.BuscaPorId(id).subscribe(produto =>{
      this.produto = produto
    });
  }

  updateProduct():void{
    this.produtoService.atualizar(this.produto).subscribe(() => {
      this.produtoService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancela(): void{
    this.router.navigate(['/produtos'])
  }
}
