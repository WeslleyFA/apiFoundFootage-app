import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from './categorias/categoria';
import { Filme } from './recomendacao/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  baseUrl : String = 'http://localhost:8080/';

  constructor( private http : HttpClient) { }

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseUrl + 'categorias');
  }

  getFilmeSugerido(filmeID : number):Observable<Filme>{
    return this.http.get<Filme>(this.baseUrl + 'filme/'+ filmeID);
  }

  getFilmes():Observable<Filme[]>{
    return this.http.get<Filme[]>(this.baseUrl + 'filme');
  }

  postPegaRecomendacao(categoriasIDs : Number[]):Observable<Number>{
    return this.http.post<Number>(this.baseUrl + 'filme/recomenda', categoriasIDs )
  }
 
  postFilme(filme : Filme):Observable<Filme>{
    return this.http.post<Filme>(this.baseUrl + 'filme', filme )
  }

  putFilme(filme : Filme):Observable<Filme>{
    return this.http.put<Filme>(this.baseUrl + 'filme', filme )
  }
 
}
