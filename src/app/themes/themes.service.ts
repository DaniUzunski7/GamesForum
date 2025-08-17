import { Injectable } from '@angular/core';
import { userComment } from '../types/comment';
import { Theme } from '../types/theme';
import { NgForm } from '@angular/forms';
import { themes } from '../data/themes';
import { userInterface } from '../types/userInterface';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  currId: number = 7;
  
  constructor(private authService: AuthService) { }

  addNewComment(form: NgForm, theme: Theme){
    const user: userInterface = this.authService.currUser()!;
    const {comment} = form.value;

    const addComment: userComment = {
      content: comment,
      likes: 0,
      author: user.username,
      isLiked: false,
      createdAt: new Date()
    }

    theme.comments.push(addComment)
  }
}
