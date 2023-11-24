import { Component, OnInit } from '@angular/core';

import { Curso } from '../Curso';
import { CursoService } from '../curso.service';


@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  constructor(private cursoService: CursoService) { }
  cursos: Array<Curso>=[];
  selected: boolean = false;
  selectedCurso!: Curso;

getCursos() {
  this.cursoService.getCursos().subscribe(cursos => {
    this.cursos = cursos;
    
  });}

  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  mostrarCertificado(array: Curso[]): string {
    let texto: string = '';
  
    for (let index = 0; index < array.length; index++) {
      if (array[index].offers_certificate === true) {
        texto += array[index].id;
        texto += ', ';
      }
    }
  
    if (texto.length > 0) {
      texto = texto.slice(0, -2);
    }
  
    return texto;
  }
  

ngOnInit() {
  this.getCursos();
}
}
