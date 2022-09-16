import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/categoria';
import { FilmesService } from '../filmes.service';
import { Filme } from '../recomendacao/filme'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  categorias : Categoria[] = [];
  categoriasSelecionadas : Categoria[] = [];
  filme : Filme;
  filmeID : number = 0;

  constructor(private filmeService: FilmesService, private route: ActivatedRoute) { 
    this.filme = new Filme();
  }

  ngOnInit(): void {
    this.filmeService
    .getCategorias()
    .subscribe(resposta => this.categorias = resposta);

    let params : Observable<Params>= this.route.params;
    params.subscribe( urlParams => this.filmeID = urlParams['filmeID']);

    if(this.filmeID != null){
      this.filmeService.getFilmeSugerido(this.filmeID)
      .subscribe(resposta => this.filme = resposta)
      this.filme.categorias = [];
    }
    
    
  }

  incluirCategoria(numero: number){    
    let categoria : Categoria = new Categoria();
    categoria.categoriaID = numero;
    this.categoriasSelecionadas.push(categoria)  
  }

  onSubmit(){
    this.filme.categorias = this.categoriasSelecionadas

    if(!this.filme.filmeID){
      this.filmeService
      .postFilme(this.filme)
      .subscribe(resposta => console.log(resposta));
    }else{
      this.filmeService
      .putFilme(this.filme)
      .subscribe(resposta => console.log(resposta));
    }
    
  }

}
