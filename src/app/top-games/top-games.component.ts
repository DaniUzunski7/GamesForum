import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { retry } from 'rxjs';
import { Game } from '../types/game-type';
import { games } from '../data/top-10-games';

@Component({
  selector: 'app-top-games',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-games.component.html',
  styleUrl: './top-games.component.css'
})
export class TopGamesComponent {
  
  topGames: Game[] = games;

  currentPage: number = 1;
  gamesPerPage: number = 4;
  
  topList: number = 1;
  getCurrPlace(){

    if (this.topList < 10){
      this.topList++;
    } 

    return this.topList;
  }

  totalPages: number = Math.ceil(this.topGames.length / this.gamesPerPage);

  getOnePageGames(){
    const startIndex = (this.currentPage - 1) * this.gamesPerPage;
    return this.topGames.slice(startIndex, startIndex + this.gamesPerPage) 
  }

  goToNextPage(){
    if (this.currentPage < this.totalPages){
      this.currentPage++;
    }
  }

  goToPreviousPage(){
    if (this.currentPage > 1){
      this.currentPage--;
    }
  }
}
