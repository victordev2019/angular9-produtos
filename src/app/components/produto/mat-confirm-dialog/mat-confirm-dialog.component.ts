import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Produto } from '../produto.model';
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MatConfirmDialogComponent>, 
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  produto: Produto
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.BuscaPorId(id).subscribe(produto =>{
      this.produto = produto
    })
  }
  
  cancela(): void{
    this.dialogRef.close(true);
  }

  deletarProduto(): void{
    this.produtoService.deletar(this.produto.id).subscribe(()=>{
      this.produtoService.showMessage('Produto excluido com sucesso!')
      this.router.navigate(["/produtos"]);
      
    })
    
  }

}
