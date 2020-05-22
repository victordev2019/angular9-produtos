import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "produtos", component: ProdutoCrudComponent
  },
  {
    path: "produtos/cadastro", component: ProdutoCreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
