import { Component, Input, OnInit } from '@angular/core';
import { CursoDetail } from '../../cursoDetail';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  @Input() cursoDetail!: CursoDetail;

  constructor() { }

  ngOnInit() {
  }

}
