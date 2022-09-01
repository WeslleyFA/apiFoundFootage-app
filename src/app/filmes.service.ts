import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from './categorias/categoria';
import { Filme } from './recomendacao/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( private http : HttpClient) { }

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categorias');
  }

  getFilmeSugerido(filmeID : number):Observable<Filme>{
    return this.http.get<Filme>('http://localhost:8080/filme/'+ filmeID);
  }

  postPegaRecomendacao(categoriasIDs : Number[]):Observable<Number>{
    return this.http.post<Number>('http://localhost:8080/filme/recomenda', categoriasIDs )
  }
 
}
