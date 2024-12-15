import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailValidatorDirective } from '../../directives/email.directive';
import { DOMAINS } from '../../constants/domains';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidatorDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  domains = DOMAINS;
  @ViewChild('emailInput') emailInput!: NgModel;
  
  constructor(private userService: UserService, private router: Router) {}
  
  login(form: NgForm) {
    
    if (form.valid) {
      console.log("Form is valid");
    } else {
      console.log('not valid');
      
      return;
    }
    

    this.userService.login();
    this.router.navigate(['/home']);
  }

}
