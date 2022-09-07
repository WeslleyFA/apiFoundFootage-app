import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { RecomendacaoComponent } from './recomendacao/recomendacao.component';


const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "home" , component: HomeComponent},
  {path: "categorias", component: CategoriasComponent},
  {path: "recomendacao/:filmeID", component: RecomendacaoComponent},
  {path: "cadastro", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
