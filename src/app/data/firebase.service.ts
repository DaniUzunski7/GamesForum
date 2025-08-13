import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../types/game-type';
import { Theme } from '../types/theme';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  private firestore = inject(Firestore);
  private themesCollection = collection(this.firestore, 'top-themes');

  constructor(private auth: AuthService) { }

  getGameData(): Observable<Game[]> {
    return collectionData(this.themesCollection, {
      idField: 'id',
    }) as Observable<Game[]>
  }

  getThemesData(): Observable<Theme[]> {
    const themesRef = collection(this.firestore, 'themes');
    return collectionData(themesRef) as Observable<Theme[]>;
  }

  async createTheme(theme: Theme) {
    const themesCollection = collection(this.firestore, 'themes');
    return addDoc(themesCollection, {
      title: theme.title,
      gameTitle: theme.gameTitle,
      content: theme.content,
      likes: 0, 
      isLiked: false,
      comments: [],
      createdAt: new Date(),
      owner: this.auth.getUser()?.displayName
    })
  }
}
