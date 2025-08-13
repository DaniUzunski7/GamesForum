import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user, UserCredential} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { userForAuth } from '../types/user';
import { userInterface } from '../types/userInterface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);

  constructor(private auth: Auth) { }
  
  user$ = user(this.firebaseAuth);
  currUser = signal<userInterface | null | undefined>(undefined);

  getUser() {
    return this.auth.currentUser;
  }
  
  register(userName: string, email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.auth, email, password)
                    .then(response => updateProfile(response.user, {displayName: userName}))

    return from(promise);
  }

  login(email: string, password: string){
    const promise = signInWithEmailAndPassword(this.auth, email, password)
                    .then(() => {});

    return from(promise)
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth);

    return from(promise);
  }
}
