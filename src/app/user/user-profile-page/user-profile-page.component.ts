import { Component, OnInit } from '@angular/core';
import { userForAuth } from '../../types/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css',
  providers: [DatePipe]
})
export class UserProfilePageComponent {

  constructor(private datePipe: DatePipe) {}

  user: userForAuth = JSON.parse(localStorage.getItem('[user]')!);
  
  isToggled: boolean = false;
  pass: string = '******'

  showPassword(){
   this.isToggled = !this.isToggled;
    
   this.pass = this.isToggled ? `${this.user.password}` : '******'; 
  }

  dateConverter(date: Date){
    return this.datePipe.transform(date, 'medium', 'Europe/Sofia', 'en-US') 
  }
}
