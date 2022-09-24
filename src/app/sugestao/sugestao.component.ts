import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { Sugestao } from './sugestao';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {
  sugestao : Sugestao;
  sugestaoValida! : Boolean;
  sugestaoEnviada: Boolean = false;
  campoSugestao!: String;
  mensagemInvalida: String = "";

  constructor(private filmeService :FilmesService) { 
    this.sugestao = new Sugestao()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.filmeService.postSugestao(this.sugestao)
    .subscribe(resposta => console.log(resposta))

    this.sugestaoEnviada = true;
  }

  validaSugestao(){
    if(this.campoSugestao != null && this.campoSugestao != ""){
      this.sugestao.nomeFilme = this.campoSugestao;

      this.filmeService.postValidaSugestao(this.sugestao.nomeFilme)
      .subscribe(resposta => this.sugestaoValida = resposta)

      if(!this.sugestaoValida){
        this.mensagemInvalida = "Já existe esse filme na nossa base."
      }
    }else{
      this.sugestaoValida = false;
      this.mensagemInvalida = "Sugestão inválida."
    }
  }

}
