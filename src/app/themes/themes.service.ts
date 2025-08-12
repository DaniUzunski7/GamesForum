import { Injectable } from '@angular/core';
import { userComment } from '../types/comment';
import { Theme } from '../types/theme';
import { userForAuth } from '../types/user';
import { NgForm } from '@angular/forms';
import { themes } from '../data/themes';
import { UserService } from '../user/user.service';
import { userInterface } from '../types/userInterface';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  currId: number = 7;
  
  constructor(private authService: AuthService) { }
  
  addNewTheme(form: NgForm) {
    const user = this.authService.currUser()!;
    
    const {title, game, content} = form.value;

    const addTheme: Theme = {
          title: title,
          gameTitle: game,
          content: content,
          createdAt: new Date(),
          likes: 0,
          liked: false,
          comments: [] as userComment[],
          id: (this.currId++).toString(),
          owner: user.userName
        }
    
        themes.push(addTheme)
  }

  addNewComment(form: NgForm, theme: Theme){
    const user: userInterface = this.authService.currUser()!;
    const {comment} = form.value;

    const addComment: userComment = {
      content: comment,
      likes: 0,
      author: user.userName,
      isLiked: false,
      createdAt: new Date()
    }

    theme.comments.push(addComment)
  }
}
