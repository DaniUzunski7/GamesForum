import { Firestore, addDoc, collection, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Injectable, inject } from '@angular/core';
import { userForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUserService {
  USER_KEY = 'user';

  private firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');
  
  constructor(private auth: Auth) {}
  
  async register(user: userForAuth) {

        const userCredentials = await createUserWithEmailAndPassword(
        this.auth, 
        user.email, 
        user.password
    );
    console.log(user);
    
    const firebaseUser = userCredentials.user;

    const userRef = doc(this.usersCollection, firebaseUser.uid)
    await setDoc(userRef, {
        userName: user.userName,
        name: user.name,
        id: firebaseUser.uid,
        email: firebaseUser.email,
        //! Hash pasword 
        password: user.password,
        phone: user.phone,
        createdAt: new Date(),
    });

    const userData = {
        id: firebaseUser.uid,
        email: user.email,
        userName: user.userName,
        name: user.name,
        phone: user.phone
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }
}
