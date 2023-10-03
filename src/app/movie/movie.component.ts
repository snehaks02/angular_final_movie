import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ViewedMovieService } from '../services/viewed-movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: any[] = [

  ];

   
  apiMovies: any[] = [];
  searchQuery: string = '';
  filteredMovies: any[] = this.movies;
  noResultsMessage: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  loadingMore: boolean = false;
  detailedmovie: any;
  showContainer:boolean=true;

 
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private movieservice: MovieService,
    private viewedMovieService: ViewedMovieService
  ) {}

  ngOnInit() {
    this.searchMovies('');
  }
  selectedMovie: any; 
 

  openMovieDetails(movie: string) {
    

    console.log(movie)
   
    this.detailedmovie=movie;
    this.showContainer=false;
  }
 
  handleGoBack() {
    this.detailedmovie=null;
    this.showContainer = true;
    // this.router.navigate(['/movie']);
  }
  
  
  searchMovies(query: string) {
    if (!query) {
      this.filteredMovies = [];
      this.noResultsMessage = '';
      return;
    }

    this.movieservice.searchMoviesByTitle(query, this.currentPage, this.itemsPerPage).subscribe(
      (res: any) => {
        if (res && res.Response === 'True') {
          this.filteredMovies = res.Search;
          this.noResultsMessage = '';
        } else {
          this.filteredMovies = [];
          this.noResultsMessage = 'No results found.';
        }
      },
      (error: any) => {
        console.error('Error searching movies:', error);
      }
    );
  }
  loadMoreResults() {
    this.currentPage++;
    this.loadingMore = true;

    this.movieservice.searchMoviesByTitle(this.searchQuery, this.currentPage, this.itemsPerPage).subscribe(
      (res: any) => {
        if (res && res.Response === 'True') {
          this.filteredMovies = [...this.filteredMovies, ...res.Search];
          this.loadingMore = false;
        }
      },
      (error: any) => {
        console.error('Error loading more results:', error);
        this.loadingMore = false;
      }
    );
  }
  
  
}











  





