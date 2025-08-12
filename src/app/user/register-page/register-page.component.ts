import { Component, ViewChild, ViewChildren } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { EmailValidatorDirective } from "../../directives/email.directive";
import { UserService } from "../user.service";
import { DOMAINS } from "../../constants/domains";
import { AuthService } from "../auth.service";
import { userForAuth } from "../../types/user";
import { ToastrService } from "ngx-toastr";

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

  constructor(private userService: UserService, private router: Router, private authService: AuthService, private toastr: ToastrService) {}

  register(formReg: NgForm) {
    const form: userForAuth = formReg.value;

    if (form.password !== form.rePass) {
      this.errorMessage = "Passwords do not match!";
      this.toastr.error("Passwords do not match!", "Error");

      return
    }
    
    this.authService
    .register(form.userName, form.email, form.password)
    .subscribe({
      next: () => {
        this.userService.register();
        this.toastr.success("Checkpoint reached!", "Successful Registration");
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // this.errorMessage = err.code;
        this.toastr.error(`Registration failed: ${err.message}`, 'Error');
      }
    });

  }
}
