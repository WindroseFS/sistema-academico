import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.html',
  styleUrls: ['./aluno-form.css']
})
export class AlunoForm {
  nome: string = '';
  nota: number | null = null;

  constructor(private alunoService: AlunoService) {}

  salvar() {
    if (!this.nome || this.nota === null) return;

    const novoAluno = new Aluno(this.nome, this.nota);
    this.alunoService.adicionar(novoAluno);

    this.nome = '';
    this.nota = null;
  }
}
