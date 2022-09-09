import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { $ } from 'protractor';
import { interval, Observable } from 'rxjs';
import { FilmesService } from '../filmes.service';
import { Filme } from './filme';

@Component({
  selector: 'app-recomendacao',
  templateUrl: './recomendacao.component.html',
  styleUrls: ['./recomendacao.component.css']
})
export class RecomendacaoComponent implements OnInit {
  filmeRecebido : Filme;
  filmeID : number = 0;
  tempo : number = 0;
  
  constructor(private filmeService: FilmesService, private route: ActivatedRoute){
    this.filmeRecebido = new Filme();
  }

  ngOnInit(): void {
      let params : Observable<Params>= this.route.params;
      params.subscribe( urlParams => this.filmeID = urlParams['filmeID']);
      this.filmeService.getFilmeSugerido(this.filmeID)
      .subscribe(resposta => this.filmeRecebido = resposta);    

      var obs$ = interval(1000)
      obs$.subscribe(
        resp => this.tempo = resp
      )
    
   }
}
