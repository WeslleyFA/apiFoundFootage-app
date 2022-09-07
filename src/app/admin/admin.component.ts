import { Component, OnInit } from '@angular/core';
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

  constructor(private filmeService: FilmesService) { 
    this.filme = new Filme();
  }

  ngOnInit(): void {
    this.filmeService
    .getCategorias()
    .subscribe(resposta => this.categorias = resposta);
  }

  incluirCategoria(numero: number){    
    let categoria : Categoria = new Categoria();
    categoria.categoriaID = numero;
    this.categoriasSelecionadas.push(categoria)  
  }

}
