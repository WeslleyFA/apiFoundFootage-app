import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { Filme } from '../recomendacao/filme';
import { RecomendacaoComponent } from '../recomendacao/recomendacao.component';
import { Categoria } from './categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias : Categoria[] = [];
  categoriasSelecionadas : Number[] = [];
 

  constructor(private filmeService: FilmesService, private router : Router){
   
  }

  incluirCategoria(numero: Number){
    this.categoriasSelecionadas.push(numero)

  }

  descobreFilme(){
    this.filmeService
    .postPegaRecomendacao(this.categoriasSelecionadas)
    .subscribe(resp =>  this.router.navigate([`/recomendacao`,resp]));
    
   
 

  }

  ngOnInit(): void {
    this.filmeService
    .getCategorias()
    .subscribe(resposta => this.categorias = resposta);
    
  }

}
