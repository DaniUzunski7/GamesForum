import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { UserComment } from '../../types/comment';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { AuthService } from '../../user/auth.service';
import { FirebaseDataService } from '../../data/firebase.service';
import { LikesService } from '../../utils/liking.service';

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

  currComments: UserComment[] | undefined;
  currTheme!: Theme | undefined;
  
  constructor(private route: ActivatedRoute, private themeService: ThemesService, private firebaseService: FirebaseDataService, private likesService: LikesService) {}
  
  ngOnInit(): void {
    const themeId = this.route.snapshot.paramMap.get('id');

    this.firebaseService.getThemeById(themeId!).subscribe((theme: Theme) => {
      this.currTheme = theme;
      this.currComments = this.currTheme!.comments;      
    });
      
  }

  postComment(form: NgForm){
    this.themeService.addNewComment(form, this.currTheme!);
    form.reset()
  }

  dateConverter(timestamp: any): Date | null {
  if (!timestamp) return null;
  return timestamp.toDate();
}

  like(themeId: string, comment: string, username: string){
    return this.likesService.commentLike(themeId, comment, username)
  }
}
