import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "../user/auth.service";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  backgroundImagePath = "assets/background-img.jpg";

  constructor(private authService: AuthService) {}

  get isLogged(): boolean {
    return this.authService.isLogged;
  }
}
