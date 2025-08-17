import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserForAuth } from '../types/user';
import { userInterface } from '../types/userInterface';
import { collection, doc, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    USER_KEY = 'user';

  private firebaseAuth = inject(Auth);
  private firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');

  constructor(private auth: Auth, private toastr: ToastrService) {}

  user$ = user(this.firebaseAuth);
  currUser = signal<userInterface | null | undefined>(undefined);

  get isLogged(): boolean {
    return JSON.parse(localStorage.getItem(this.USER_KEY)!)
  } 

  getUser() {
    return this.auth.currentUser;
  }

  register(user: UserForAuth): Observable<void> {
    const usersCollection = collection(this.firestore, 'users');
    
    const newUser = createUserWithEmailAndPassword(this.auth, user.email, user.password!)
    .then((userCredential) => {
      const userFireBase = userCredential.user;
      
      setDoc(doc(usersCollection, userFireBase.uid), {
        id: userFireBase.uid,
        email: user.email,
        username: user.username,
        name: user.name,
        phone: user.phone,
        createdAt: new Date().toISOString(),
      }).then(() => {
        localStorage.setItem(this.USER_KEY, JSON.stringify({
            id: userFireBase.uid,
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
      const userInfo = userData.data() as UserForAuth;
      console.log(userInfo);
      
       localStorage.setItem(this.USER_KEY, JSON.stringify({
            id: uid,
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

  editUser(newUserData: NgForm) {
      const oldData: UserForAuth = JSON.parse(
        localStorage.getItem(this.USER_KEY)!
      );
  
      if (!oldData) {
        throw new Error('No logged-in user found');
      }
  
      const userDocRef = doc(this.firestore, `users/${oldData.id}`);
  
      try {
        updateDoc(userDocRef, {
          ...newUserData.value,
          id: oldData.id,
          createdAt: oldData.createdAt,
          updatedAt: new Date(),
        });
        this.toastr.success('Profile updated successfully', 'Success');
      } catch (error) {
        this.toastr.error('Failed to update profile', `${error}`);
      }
  
      //! Should update email and username in Firebase Auth as well
      // if (newUserData.value.username !== oldData.username || newUserData.value.email !== oldData.email) {
      //   try {
      //     updateEmail(this.auth.currentUser!, newUserData.value.email);
      //     updateProfile(this.auth.currentUser!, {
      //       displayName: newUserData.value.username,
      //     });
      //   } catch (error) {
      //     this.toastr.error('Failed to update email or username', `${error}`);
      //   }
      // }
  
      localStorage.setItem( this.USER_KEY, JSON.stringify({
          ...newUserData.value,
          id: oldData.id,
          createdAt: oldData.createdAt,
          updatedAt: new Date(),
        })
      );
    }
}


