import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FilmesComponent } from './admin/filmes/filmes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { RecomendacaoComponent } from './recomendacao/recomendacao.component';


const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "home" , component: HomeComponent},
  {path: "categorias", component: CategoriasComponent},
  {path: "recomendacao/:filmeID", component: RecomendacaoComponent},
  {path: "cadastro", component: AdminComponent},
  {path: "edicao/:filmeID", component: AdminComponent},
  {path: "filmes/63e98cef325a7cdb1522b35e84b6a600a64f7785", component: FilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
