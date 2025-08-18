import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Theme } from '../../types/theme';
import { DatePipe, NgFor, AsyncPipe, NgIf } from '@angular/common';
import { FirebaseDataService } from '../../utils/firebase.service';
import { LikesService } from '../../utils/liking.service';


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
  
  constructor( private firebaseService: FirebaseDataService, private likesService: LikesService) {
    this.$themes = this.firebaseService.getThemesData();    
  }
  
  like(title: string){
    return this.likesService.themeLike(this.currThemes, title)
  }

  
  dateConverter(timestamp: any): Date | null {
  if (!timestamp) return null;
  return timestamp.toDate();
}
}
