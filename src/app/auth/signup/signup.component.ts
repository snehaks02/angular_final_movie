

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeToTerms: boolean = false;
  userData: any = {}; 

  onRegister() {

  
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      if (this.password === this.confirmPassword) {
        let userData = {
          name: this.name,
          email: this.email,
          password: this.password
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));
        
        
        this.userData = userData;

        
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.agreeToTerms = false;

        
        alert('Registration successful! You can now log in.');
      } else {
        alert('Passwords do not match.');
      }
    
  }
}

