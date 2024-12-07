import { Component } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [],
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
