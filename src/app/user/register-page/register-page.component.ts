import { Component, ViewChild, ViewChildren } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { EmailValidatorDirective } from "../../directives/email.directive";
import { UserService } from "../user.service";
import { DOMAINS } from "../../constants/domains";
import { passwordValidator } from "../../utils/password.validator";
import { AuthService } from "../auth.service";
import { userForAuth } from "../../types/user";


@Component({
  selector: "app-register-page",
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidatorDirective],
  templateUrl: "./register-page.component.html",
  styleUrl: "./register-page.component.css",
})
export class RegisterPageComponent {
  @ViewChild("passInput") passInput!: NgModel;
  @ViewChild("rePassassInput") rePassInput!: NgModel;

  domains = DOMAINS;
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

  register(formReg: NgForm) {
    const form: userForAuth = formReg.value;
    
    this.authService
    .register(form.userName, form.email, form.password)
    .subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.code;
      }
    });

   passwordValidator
  }
}
