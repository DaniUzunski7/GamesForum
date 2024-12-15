import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  backgroundImagePath = "assets/background-img.jpg";

  constructor(private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
