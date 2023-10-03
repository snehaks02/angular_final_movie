// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   onSignIn() {
//     // Check if email and password are not empty
//     if (this.email && this.password) {
//       // Create an object to represent the user data
//       const userData = {
//         email: this.email,
//         password: this.password
//       };

//       // Convert the user data to a JSON string and store it in local storage
//       localStorage.setItem('userData', JSON.stringify(userData));

//       // Optionally, you can also navigate to a different page or perform other actions here

//       // Clear the form fields
//       this.email = '';
//       this.password = '';
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignIn() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (this.email === userData.email && this.password === userData.password) {
        
        this.router.navigate(['/movie']);
      } else {
        
        this.errorMessage = `Login ID invalid ${userData.email}`;
      }
    } else {
     
      this.errorMessage = 'No user data found';
    }
  }
}



