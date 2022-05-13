import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  //vetor de alunos
  public vetorAlunos:Aluno[] = [
    new Aluno("Aluno1", 7.5, 8.0),
    new Aluno("Aluno2", 4.0, 8.0),
    new Aluno("Aluno2", 6.0, 10.0),

  ];

  //cadastro de alunos
  public cadastrar(aluno:Aluno) {
    aluno.media = (aluno.nota1 + aluno.nota2) / 2

    this.vetorAlunos.push(aluno);
    
  }

  //seleção de alunos 
  public listar() {
    return this.vetorAlunos;
  }
  //média do aluno 
  

  //alterar aluno 
  public alterar(id:number, aluno:Aluno) {
    this.vetorAlunos[id] = aluno;
  }

  //excluir aluno 
  public excluir(id:number){
    this.vetorAlunos.splice(id, 1)
  }
}
