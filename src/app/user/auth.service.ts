import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { userForAuth } from '../types/user';
import { userInterface } from '../types/userInterface';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    USER_KEY = 'user';

  private firebaseAuth = inject(Auth);
  private firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');

  constructor(private auth: Auth) {}

  user$ = user(this.firebaseAuth);
  currUser = signal<userInterface | null | undefined>(undefined);

  getUser() {
    return this.auth.currentUser;
  }

  register(user: userForAuth): Observable<void> {
    
    const data = createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    )
      .then((response) =>
        updateProfile(response.user, { displayName: user.userName })
      )
      .then(() => {
        console.log(this.auth.currentUser);
        
        const userRef = doc(this.usersCollection, this.auth.currentUser!.uid);
        setDoc(userRef, {
          userName: user.userName,
          name: user.name,
          id: this.auth.currentUser!.uid,
          email: this.auth.currentUser!.email,
          //! Hash pasword
          password: user.password,
          phone: user.phone,
          createdAt: new Date(),
        });
      });

        const userData = {
        id: this.auth.currentUser!.uid,
        email: user.email,
        userName: user.userName,
        name: user.name,
        phone: user.phone
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));

    return from(data);
  }

  login(email: string, password: string) {
    const promise = signInWithEmailAndPassword(this.auth, email, password).then(
      () => {}
    );

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth);
    localStorage.removeItem('user');
    return from(promise);
  }
}
