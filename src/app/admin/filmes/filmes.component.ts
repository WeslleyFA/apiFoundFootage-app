import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/filmes.service';
import { Filme } from 'src/app/recomendacao/filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes : Filme[] = [];
  senha : String = '';
  constructor(private filmeService : FilmesService) { }

  ngOnInit(): void {
    this.filmeService.getFilmes()
    .subscribe(resp => this.filmes = resp);
  }

  validaSenha(senha : String){
    this.senha = senha;
  }

}
