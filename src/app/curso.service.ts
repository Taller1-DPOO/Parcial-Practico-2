import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CursoDetail } from './cursoDetail';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
    providedIn: 'root'
  })
export class CursoService {
    private apiUrl: string = environment.baseUrl + 'cursos';

constructor(private http: HttpClient) { }

    getCursos() {
        return this.http.get<Curso>(this.apiUrl);
    }

    getCurso(id: string): Observable<CursoDetail> {
        return this.http.get<CursoDetail>(this.apiUrl + '/' + id);
      }

}
