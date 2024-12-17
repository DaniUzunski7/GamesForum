import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Game } from '../types/game-type';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  firestore = inject(Firestore);
  themesCollection = collection(this.firestore, 'top-themes');

  constructor() { }

  getData(): Observable<Game[]> {
    return collectionData(this.themesCollection, {
      idField: 'id',
    }) as Observable<Game[]>
  }
}
