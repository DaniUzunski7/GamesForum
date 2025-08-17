import { inject, Injectable } from '@angular/core';
import { userComment } from '../types/comment';
import { Theme } from '../types/theme';
import { NgForm } from '@angular/forms';
import { AuthService } from '../user/auth.service';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private firestore = inject(Firestore);
  
  constructor(private authService: AuthService, private toastr: ToastrService) { }

  addNewComment(form: NgForm, theme: Theme, ){
    const themeRef = doc(this.firestore, 'themes', theme.id);
      
    const user = this.authService.currUser()!;
    const comment = {
      content: form.value.comment,
      author: user.username,
      likes: 0,
      createdAt: new Date(),
      likedBy: [],
    } as userComment;

    try {
       updateDoc(themeRef, {
      comments: [...theme.comments, comment]
    });
    } catch (error) {
      this.toastr.error('Error adding comment', 'Please try again later');
    }
   
  }
}
