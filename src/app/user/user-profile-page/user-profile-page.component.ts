import { Component, OnInit } from '@angular/core';
import { userForAuth } from '../../types/user';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css',
  providers: [DatePipe]
})
export class UserProfilePageComponent {

  constructor(private datePipe: DatePipe, private userService: UserService) {}

  user: userForAuth = JSON.parse(localStorage.getItem('[user]')!);
  
  isToggled: boolean = false;
  isShown: boolean = false;
  pass: string = '******'

  showPassword(){
   this.isShown = !this.isShown;
    
   this.pass = this.isShown ? `${this.user.password}` : '******'; 
  }

  dateConverter(date: Date){
    return this.datePipe.transform(date, 'medium', 'Europe/Sofia', 'en-US') 
  }

  togle(){
    this.isToggled = !this.isToggled;
  }

  cancelEdit(){
    this.isToggled = !this.isToggled;
  }

  editProfile(form: NgForm){
    this.userService.editUser(form);
    this.isToggled = !this.isToggled;
  }
}
