// import { Component } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {

//   constructor(private modalService: NgbModal) {
//   }

//   public open(modal: any): void {
//     this.modalService.open(modal);
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router, private modalService: NgbModal) {} 

  logout() {
    // Clear user data from local storage
    localStorage.removeItem('userData');
    // Redirect to the login page or any other desired route
    this.router.navigate(['/auth/login']);
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
