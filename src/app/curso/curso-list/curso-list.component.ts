import { Component, OnInit } from '@angular/core';

import { CursoDetail } from '../../cursoDetail';
import { Curso } from '../../curso';
import { CursoService } from '../../curso.service';


@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  selectedCurso!: CursoDetail;
  selected: Boolean = false;

  cursos: Array<Curso> = [
    new Curso(1,"Introducción a la Inteligencia Artificial","Coursera",2019,"true","Adéntrate en el fascinante mundo de la IA. Aprende sobre aprendizaje automático, procesamiento del lenguaje natural y cómo la IA está revolucionando diversos sectores. Ideal para aquellos que buscan una base sólida en un campo en constante evolución.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/intro-a-la-IA.png",50),
    new Curso(2,"Fundamentos de la Programación","edX",2018,"false","Descubre los pilares de la programación con un enfoque en Python. Este curso te guiará a través de los conceptos esenciales como variables, bucles y estructuras de datos, preparándote para futuros desafíos de programación.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/fundamentos-programaci%C3%B3n.png",40),
    new Curso(3, "Diseño Web para Principiantes","Udemy",2022,"true", "Sumérgete en el diseño web desde cero. Aprende HTML, CSS y los principios del diseño responsivo para crear sitios web atractivos y funcionales. Perfecto para aspirantes a diseñadores web.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/dise%C3%B1o-web.png", 30),
    new Curso(4, "Historia del Arte Moderno", "Khan Academy", 2017,"false", "Embárcate en un viaje a través de los movimientos artísticos que dieron forma al arte moderno. Explora obras icónicas y sus creadores, y descubre cómo el arte moderno continúa influenciando el mundo actual.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/historia-arte-moderno.png",25),
    new Curso(5, "Ciencia de Datos Aplicada", "Pluralsight", 2021, "true", "Profundiza en el análisis estadístico, la manipulación de datos y la visualización con Python. Este curso te equipará con habilidades prácticas en ciencia de datos, preparándote para resolver problemas reales con datos.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/data-science.png",60),
    new Curso(6,"Negocios Sostenibles: Estrategias Efectivas","LinkedIn Learning",2022,"true","Aprende a integrar sostenibilidad y responsabilidad social en tu modelo de negocio. Este curso cubre estrategias para equilibrar rentabilidad y sostenibilidad ambiental, esencial para el empresario consciente del futuro.","https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/81d9a5039e4bfa85fa347a3638dd2235b7d2f00c/images/202320/p2_v2/negocios-sostenibles.png",35)
  ]

  onSelected(curso: CursoDetail): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  constructor(private CursoService: CursoService) { }

  getCursos(): void {
    // this.CursoService.getCursos().subscribe((cursos)=> {
    //   // this.cursos = cursos;
    // });
  }
  
  ngOnInit() {
    // this.getCursos(); 
  }

}
