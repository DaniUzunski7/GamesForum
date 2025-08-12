import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../types/game-type';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  private firestore = inject(Firestore);
  private themesCollection = collection(this.firestore, 'top-themes');

  constructor() { }

  getData(): Observable<Game[]> {
    return collectionData(this.themesCollection, {
      idField: 'id',
    }) as Observable<Game[]>
  }
}
