// viewed-movie.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewedMovieService {
  // Create an EventEmitter to notify when a movie is marked as viewed
  viewedMovieChanged = new EventEmitter<string[]>();

  private viewedMovies: string[] = [];

  // Function to mark a movie as viewed
  markAsViewed(movieId: string) {
    if (!this.viewedMovies.includes(movieId)) {
      this.viewedMovies.push(movieId);
      this.viewedMovieChanged.emit(this.viewedMovies);
    }
  }

  // Function to get the list of viewed movie IDs
  getViewedMovies() {
    return this.viewedMovies;
  }
}

