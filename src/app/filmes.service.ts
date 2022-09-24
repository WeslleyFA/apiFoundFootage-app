import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from './categorias/categoria';
import { Filme } from './recomendacao/filme';
import { Sugestao } from './sugestao/sugestao';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  baseUrl : String = 'https://api.findfootage.tech/';

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

  postSugestao(sugestao : Sugestao):Observable<Sugestao>{
    return this.http.post<Sugestao>(this.baseUrl + 'sugestao', sugestao )
  }

  postValidaSugestao(sugestao : String):Observable<Boolean>{
    return this.http.post<Boolean>(this.baseUrl + 'sugestao/verifica', sugestao )
  }
 
}
