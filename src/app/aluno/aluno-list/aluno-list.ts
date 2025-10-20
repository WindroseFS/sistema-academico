import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-list.html',
  styleUrls: ['./aluno-list.css']
})
export class AlunoList {
  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.alunos = this.alunoService.listar();
  }
}


