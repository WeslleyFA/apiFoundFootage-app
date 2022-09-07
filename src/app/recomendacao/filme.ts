import { Categoria } from "../categorias/categoria";

export class Filme{
    filmeID! : number;
    nome! : String;
    sinopse! : String;
    imgUrl! : String;
    categorias!: Categoria[];

   
    
}