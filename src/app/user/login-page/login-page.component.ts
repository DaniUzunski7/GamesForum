import { Component, ViewChild, viewChild } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { EmailValidatorDirective } from "../../directives/email.directive";
import { DOMAINS } from "../../constants/domains";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";

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
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  login(form: NgForm) {
    const formData = form.value;
    
    try {
      this.authService.login(formData.email, formData.password).subscribe( () => {
          this.toastr.success("Login successful!", `Welcome back!`)
          this.router.navigate(['/home'])
        })
      } catch (error: any) {
          this.errorMess = error.code;
          this.toastr.error(`Wrong email or password`, 'Login Failed');
          form.controls['password'].reset();
        }
    }
  }
