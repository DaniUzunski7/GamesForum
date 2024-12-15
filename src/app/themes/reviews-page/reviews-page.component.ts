import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { themes } from '../../data/themes';
import { DatePipe } from '@angular/common';
import { likingFn } from '../../utils/liking';

@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.css',
  providers: [DatePipe]
})
export class ReviewsPageComponent {
  currThemes: Theme[] = themes

  constructor(private datePipe: DatePipe) {}

  like(title: string){
    return likingFn.themeLike(this.currThemes, title)
  }

  dateConverter(date: Date){
    return this.datePipe.transform(date, 'medium', 'Europe/Sofia', 'en-US') 
  }
}
