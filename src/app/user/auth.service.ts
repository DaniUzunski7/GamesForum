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
import { collection, doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';

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
    const usersCollection = collection(this.firestore, 'users');
    
    const newUser = createUserWithEmailAndPassword(this.auth, user.email, user.password)
    .then((userCredential) => {
      const userFireBase = userCredential.user;
      
      setDoc(doc(usersCollection, userFireBase.uid), {
        uid: userFireBase.uid,
        email: user.email,
        username: user.username,
        name: user.name,
        phone: user.phone,
        createdAt: new Date().toISOString(),
      }).then(() => {
        localStorage.setItem(this.USER_KEY, JSON.stringify({
            uid: userFireBase.uid,
            email: user.email,
            username: user.username,
            name: user.name,
            phone: user.phone,
            createdAt: new Date().toISOString(),  
          })
        );

        return user;
      });
    });

    return from(newUser);
  }

  login(email: string, password: string) {
    const promise = signInWithEmailAndPassword(this.auth, email, password).then(userCredential => {
    const uid = userCredential.user.uid
    const user = doc(this.usersCollection, uid);

    const userData = getDoc(user).then((userData) => {
      const userInfo = userData.data() as userForAuth;
      console.log(userInfo);
      
       localStorage.setItem(this.USER_KEY, JSON.stringify({
            uid: uid,
            email: userInfo.email,
            username: userInfo.username,
            name: userInfo.name,
            phone: userInfo.phone,
            createdAt: userInfo.createdAt,
          })
        );

    });
    
   
    
  });
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth);

    localStorage.removeItem('user');
    
    return from(promise);
  }
}


