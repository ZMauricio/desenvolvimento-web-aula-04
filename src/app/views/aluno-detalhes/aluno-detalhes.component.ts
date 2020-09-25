import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

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

  private id: number = null;

  public aluno;

  constructor(private route: ActivatedRoute) {


    this.id = Number( this.route.snapshot.paramMap.get('id') );

    this.aluno = this.getAluno(this.id);
  }

  ngOnInit(): void {
  }

  getAluno(id: number) {

    for(let obj of this.alunos) {
      if(obj.id === id) {
        return obj;
      }
    }

    return null;
  }

}
