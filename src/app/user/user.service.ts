import { Injectable } from "@angular/core";
import { userForAuth } from "../types/user";
import { NgForm } from "@angular/forms";

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
      username: 'DaniU7',
      name: "Daniel Uzunski",
      phone: "0897885889",
      email: "dani.uzunski@icloud.com",
      password: "123123",
      id: "123",
      createdAt: new Date(),
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = null;

    localStorage.removeItem(this.USER_KEY);
  }

  getUser(){
    const localStUser = localStorage.getItem(this.USER_KEY) || '';
    return this.user = JSON.parse(localStUser);
  }

  editUser(newUserData: NgForm){
    const oldData: userForAuth = JSON.parse(localStorage.getItem(this.USER_KEY) || '');
    
    const {username, name, email, mobile, password} = newUserData.value;

    const newProfileData: userForAuth = {
      username: username,
      name: name,
      email: email,
      phone: mobile,
      password: password,
      createdAt: oldData.createdAt,
      id: oldData.id
    }
    
    localStorage.setItem(this.USER_KEY, JSON.stringify(newProfileData));
  }
}
