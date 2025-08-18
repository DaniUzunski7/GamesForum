import { Component, OnInit, inject } from '@angular/core';
import { UserForAuth } from '../../types/user';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Theme } from '../../types/theme';
import { FirebaseDataService } from '../../utils/firebase.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css',
  providers: [DatePipe]
})
export class UserProfilePageComponent {
  private fireStore = inject(Firestore);
  private firebaseAuth = inject(Auth)

  $themes: Theme[] = [];

  constructor(private datePipe: DatePipe, private authService: AuthService, private firebaseService: FirebaseDataService, private toastr: ToastrService) {}

  ngOnInit(): void {
  const currentUser = this.user.username;
    
  this.firebaseService.getThemesByUser(currentUser).then(themes => {
    this.$themes = themes;
  });
}

  user: UserForAuth = JSON.parse(localStorage.getItem('user')!)

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
    this.authService.editUser(form);
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

  deleteTheme(themeId: string){
    this.firebaseService.deleteTheme(themeId).then(() => {
      this.$themes = this.$themes.filter(theme => theme.id !== themeId);
      this.toastr.success('Theme deleted successfully');
    }).catch(error => {
      console.error("Error deleting theme:", error);
      this.toastr.error('Failed to delete theme');
    });
  }
}


