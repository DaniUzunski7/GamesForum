import { Component, ViewChild, viewChild } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { UserService } from "../user.service";
import { EmailValidatorDirective } from "../../directives/email.directive";
import { DOMAINS } from "../../constants/domains";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidatorDirective],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.css",
})
export class LoginPageComponent {
  domains = DOMAINS;
  errorMess: string | null = null;

  @ViewChild("emailInput") emailInput!: string;
  @ViewChild("passInput") passInput!: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  login(form: NgForm) {
    const formData = form.value;

    this.authService
      .login(formData.email, formData.password)
      .subscribe({
      next: () => {
        this.router.navigate(["/reviews"]);
      },
      error: (err) => {
        this.errorMess = err.code;
      },
    });
  }
}
