

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '56ea24dd';

  constructor(private http: HttpClient) {}

  // Search movies by title with pagination support
  searchMoviesByTitle(title: string, page: number, itemsPerPage: number): Observable<any> {
    const apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}&page=${page}&type=movie&plot=full&r=json`;
    return this.http.get(apiUrl);
  }

  // Search movies by IMDb ID
  searchMoviesById(id: string): Observable<any> {
    const apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}&plot=full&r=json`;
    return this.http.get(apiUrl);
  }
}








