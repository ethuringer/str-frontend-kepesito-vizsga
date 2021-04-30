import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]> = this.movieService.getMovieList();

  constructor(
    private movieService: HttpService,
  ) {}
  ngOnInit(): void {
  }

  getMovies(): void {
    this.movieService.getMovieList();
  }

  deleteMovie(id: number): any {}

}
