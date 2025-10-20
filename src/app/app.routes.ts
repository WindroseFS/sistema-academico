import { Routes } from '@angular/router';
import { AlunoList } from './aluno/aluno-list/aluno-list';
import { AlunoForm

 } from './aluno/aluno-form/aluno-form';
export const routes: Routes = [
    {path: '', component: AlunoList},
    {path: 'novo', component: AlunoForm},
];
