import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module'
import { NavbarModule } from './navbar/navbar.module';
import { CategoriasComponent } from './categorias/categorias.component'
import { CategoriasModule } from './categorias/categorias.module';
import { FilmesService } from './filmes.service';
import { RecomendacaoComponent } from './recomendacao/recomendacao.component';
import { RecomendacaoModule } from './recomendacao/recomendacao.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { FilmesModule } from './admin/filmes/filmes.module';
import { SugestaoModule } from './sugestao/sugestao.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    NavbarModule, 
    CategoriasModule,
    RecomendacaoModule,
    AdminModule, 
    FilmesModule, 
    SugestaoModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
