import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { CommonModule, DatePipe, NgFor, AsyncPipe, NgIf } from '@angular/common';
import { likingFn } from '../../utils/liking';
import { FirebaseDataService } from '../../data/firebase.service';


@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, NgIf, DatePipe],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.css',
  providers: [DatePipe]
})
export class ReviewsPageComponent {

  currThemes: Theme[] = [];
  $themes;
  
  constructor(private date: DatePipe, private firebaseService: FirebaseDataService) {
    this.$themes = this.firebaseService.getThemesData();    
  }
  
  like(title: string){
    return likingFn.themeLike(this.currThemes, title)
  }

  
  dateConverter(timestamp: any): Date | null {
  if (!timestamp) return null;
  return timestamp.toDate();
}
}
