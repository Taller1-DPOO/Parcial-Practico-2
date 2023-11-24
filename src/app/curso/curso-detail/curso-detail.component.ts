import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  @Input() Curso!: Curso;

  constructor() { }

  ngOnInit() {
  }

}
