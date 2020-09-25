import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../../services/alunos.service';

interface Aluno {
  nome: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos = [
    {
      id: 1,
      nome: 'João',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    },
    {
      id: 2,
      nome: 'Júlio',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-02.jpg'
    },
    {
      id: 3,
      nome: 'Maria',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-03.jpg'
    },
    {
      id: 4,
      nome: 'Maria Clara',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-04.jpg'
    },
    {
      id: 5,
      nome: 'Ana Júlia',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    },
    {
      id: 6,
      nome: 'Cláudio',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-02.jpg'
    },
    {
      id: 7,
      nome: 'Peter Parker',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-03.jpg'
    },
    {
      id: 8,
      nome: 'Tony Stark',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-04.jpg'
    },
    {
      id: 9,
      nome: 'Tina Turner',
      curso: 'Ciência da Computação',
      periodo: 3,
      foto: '../../../assets/img/alunos/aluno-01.jpg'
    }
  ];

  constructor(private service: AlunosService) {

   
  }

  ngOnInit() {

  }

}
