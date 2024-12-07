import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private userService: UserService, private router: Router) {}
  
  login(form: NgForm) {
    console.log(form.value);
    
    

    this.userService.login();
    this.router.navigate(['/home']);
  }

}
