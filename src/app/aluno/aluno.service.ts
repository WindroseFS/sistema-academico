import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
@Injectable({
 providedIn: 'root',
})
export class AlunoService {
 private alunos: Aluno[] = [
new Aluno( 'João Silva', 8, 1),
new Aluno( 'Maria Oliveira', 6.5, 2),
new Aluno( 'Carlos Souza', 9, 3),
new Aluno( 'Fernanda Santos', 7.5, 4),
 ];
 constructor() {}

 listar(): Aluno[] {
return this.alunos;
 }

 adicionar(aluno: Omit<Aluno, 'id'>) {
const id = this.alunos.length + 1;
const novoAluno = new Aluno(
aluno.nome, aluno.nota, id);
this.alunos.push(novoAluno);
 }
}
