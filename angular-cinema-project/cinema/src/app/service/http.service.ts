import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/ethuringer/movies';

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASE_URL);
  }

  deleteMovie(id):any {
    return null;
  }
}
