import { Component, Input, OnInit,OnChanges, SimpleChanges,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit,OnChanges {

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      if ('movie' in changes && !changes['movie'].firstChange) {
        
        console.log('Movie details have changed:', this.movie);
      }
  }
  @Input() movie: any; 
  @Output() goBackEvent = new EventEmitter<void>();
  goBack() {
    this.goBackEvent.emit();
  }
}








// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent implements OnInit {
//   movieId: number | undefined;

//   constructor(private route: ActivatedRoute) {
//     this.movieId = undefined; // Initialize movieId here
//   }

//   ngOnInit(): void {
//     // Retrieve the movie ID from the route parameter
//     this.route.params.subscribe(params => {
//       this.movieId = +params['id'];
//       // Load movie details using this.movieId
//       // Implement the logic to fetch movie details by ID from your data source
//     });
//   }
// }

