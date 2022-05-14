import { Component, OnInit } from '@angular/core';
import { Aluno } from './Aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //Atributos
  //Atributos

  public vetorAlunos!: Aluno[];
  public aluno!: Aluno;
  public id!:number;

  constructor(private servico:AlunoService) { }

  ngOnInit() {
    this.id = -1;
    this.aluno = new Aluno(); 
    this.vetorAlunos = this.servico.listar();
  }

  //Cadastrar
  cadastrar(){
    this.servico.cadastrar(this.aluno);
    this.aluno = new Aluno(); 
    // this.servico.cadastrar(this.aluno);
    // this.aluno = new Aluno(this.aluno.nomeAluno, this.aluno.nota1, this.aluno.nota2);
  }

  editar(id:number) {
    this.id = id;

    this.aluno = new Aluno(
      this.vetorAlunos[id].nomeAluno,
      this.vetorAlunos[id].nota1,
      this.vetorAlunos[id].nota2
    )
  }

  atualizar() {
    this.servico.alterar(this.id,this.aluno);
    this.aluno = new Aluno();
    this.id = -1;
  }
  excluir(id:number) {
    this.servico.excluir(id);
    this.id = -1;
  }
}
