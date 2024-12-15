import { Component, ViewChild, ViewChildren } from "@angular/core";
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { EmailValidatorDirective } from "../../directives/email.directive";
import { UserService } from "../user.service";
import { DOMAINS } from "../../constants/domains";
import { passwordValidator } from "../../utils/password.validator";


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

  constructor(private userService: UserService, private router: Router) {}

  register(formReg: NgForm) {

    if (formReg.valid) {
      console.log("Form is valid");

      this.userService.register();
      this.router.navigate(["/home"]);
    }  else {
      console.log("Not valid");
      return;
    }

   passwordValidator

    this.userService.register();
    this.router.navigate(["/home"]);
  }
}
