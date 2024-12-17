import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { themes } from '../../data/themes';
import { DatePipe, NgClass } from '@angular/common';
import { userComment } from '../../types/comment';
import { likingFn } from '../../utils/liking';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemesService } from '../themes.service';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
  providers: [DatePipe]
})
export class ThemeComponent implements OnInit{
  authService = inject(AuthService);

  themes: Theme[] = themes;
  currComments: userComment[] | undefined;
  currTheme: Theme | undefined;
  
  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private themeService: ThemesService) {}
  
  ngOnInit(): void {
    const themeId = this.route.snapshot.paramMap.get('id');
    
    this.currTheme = themes.find(theme => theme.id === themeId);
    
    this.currComments = this.currTheme!.comments;
  }

  postComment(form: NgForm){
    this.themeService.addNewComment(form, this.currTheme!);
    form.reset()
  }

  dateConverter(date: Date){
    return this.datePipe.transform(date, 'mediumDate', 'Europe/Sofia', 'en-US') 
  }

  like(title: string, comment: string){
    return likingFn.commentLike(themes, title, comment)
  }
}
