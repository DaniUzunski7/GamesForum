import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { themes } from '../../data/themes';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { userComment } from '../../types/comment';
import { likingFn } from '../../utils/liking';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { AuthService } from '../../user/auth.service';
import { FirebaseDataService } from '../../data/firebase.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePipe, AsyncPipe, NgIf],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
  providers: [DatePipe]
})
export class ThemeComponent implements OnInit{
  authService = inject(AuthService);

  currComments: userComment[] | undefined;
  currTheme!: Theme | undefined;
  
  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private themeService: ThemesService, private firebaseService: FirebaseDataService) {
    
  }
  
  ngOnInit(): void {
    const themeId = this.route.snapshot.paramMap.get('id');

    this.firebaseService.getThemeById(themeId!).subscribe((theme: Theme) => {
      this.currTheme = theme;
      this.currComments = this.currTheme!.comments;      
    });
      
  }

  postComment(form: NgForm){
    // this.themeService.addNewComment(form, this.currTheme!);
    form.reset()
  }

  dateConverter(timestamp: any): Date | null {
  if (!timestamp) return null;
  return timestamp.toDate();
}

  like(title: string, comment: string){
    return likingFn.commentLike(themes, title, comment)
  }
}
