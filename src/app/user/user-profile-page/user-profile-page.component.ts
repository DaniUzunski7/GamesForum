import { Component, OnInit, inject } from '@angular/core';
import { userForAuth } from '../../types/user';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css',
  providers: [DatePipe]
})
export class UserProfilePageComponent {
  fireStore = inject(Firestore);
  private firebaseAuth = inject(Auth)

  constructor(private datePipe: DatePipe, private userService: UserService, private auth: AuthService, private toastr: ToastrService) {}
  user: userForAuth = JSON.parse(localStorage.getItem('user')!)

  isToggled: boolean = false;

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

  resetPassword(){ 
    sendPasswordResetEmail(this.firebaseAuth,  this.user.email)

      .then(() => {
        if (confirm("Do you want to reset your password?")){
          this.toastr.success('Password reset email sent', 'Please check your inbox');
        } else {
          this.toastr.show('Password reset cancelled');
          return;
        }
        
      })
      .catch((error) => {
        console.error("Error sending reset email:", error.code, error.message);
      });
  }
}


