import { Injectable } from "@angular/core";
import { userForAuth } from "../types/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  USER_KEY = "[user]";
  user: userForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  } 

  constructor() {
    try {
      const localStUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStUser);
    } catch (error) {
      this.user = null;
    }
  }

  login() {
    this.user = {
      userName: 'DaniU7',
      firstName: "Daniel",
      lastName: "Uzunski",
      email: "123",
      password: "123",
      id: "123",
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = null;

    localStorage.removeItem(this.USER_KEY);
  }
}
