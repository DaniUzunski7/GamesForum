import { Component, OnInit, inject } from '@angular/core';
import { UserForAuth } from '../../types/user';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
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
  router: any;

  constructor(private datePipe: DatePipe, private authService: AuthService, private firebaseService: FirebaseDataService, private toastr: ToastrService) {}

  ngOnInit(): void {
  const currentUser = this.user.username;
    
  this.firebaseService.getThemesByUser(currentUser).then(themes => {
    this.$themes = themes;
  });
}

  user: UserForAuth = JSON.parse(localStorage.getItem('user')!)
  editingThemeId: string | null = null;

  isToggled: boolean = false;
  editing: boolean = false;

  editFormData: { title: string; gameTitle: string } = { title: '', gameTitle: '' };

  dateConverter(date: Date){
    return this.datePipe.transform(date, 'medium', 'Europe/Sofia', 'en-US') 
  }

  togle(){
    this.isToggled = !this.isToggled;
  }

  cancelEdit(){
    this.isToggled = false;
  }

  cancelThemeEdit(){
    this.editingThemeId = null;
    this.editing = false;
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
    
    if(!window.confirm("Are you sure you want to delete this theme? This action cannot be undone.")) {
      return;
    }

    this.firebaseService.deleteTheme(themeId).then(() => {
      this.$themes = this.$themes.filter(theme => theme.id !== themeId);
      this.toastr.success('Theme deleted successfully');
    }).catch(error => {
      console.error("Error deleting theme:", error);
      this.toastr.error('Failed to delete theme');
    });
  }

  editTheme(themeId: string){
    this.editingThemeId = themeId;
    this.editing = true;

  const theme = this.$themes.find(t => t.id === themeId);
  if (!theme) return;

  this.editFormData = {
    title: theme.title,
    gameTitle: theme.gameTitle
  };
  }

  async saveEdit(theme: Theme) {
  const themeRef = doc(this.fireStore, 'themes', theme.id);

  try {
    await updateDoc(themeRef, {
      title: this.editFormData.title,
      gameTitle: this.editFormData.gameTitle,
      updatedAt: new Date()
    });

    this.editingThemeId = null;
    this.editing = false;
    this.toastr.success('Updated');

    theme.title = this.editFormData.title;
    theme.gameTitle = this.editFormData.gameTitle;

    setTimeout(() => {
  this.editingThemeId = null;
}, 150);

  } catch (error) {
    console.error(error);
  }
}

}
