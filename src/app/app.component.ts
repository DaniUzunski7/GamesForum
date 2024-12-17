import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import {FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthService } from './user/auth.service';
import { FirebaseDataService } from './data/firebase.service';
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../enviroments/enviroment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {provide: 'Firestore', useFactory: () => getFirestore(initializeApp(firebaseConfig))}
  ]
})
export class AppComponent implements OnInit{
  authService = inject(AuthService)
  fireStore = inject(Firestore);

  constructor(private dataService: FirebaseDataService) {}

  ngOnInit(): void {
    console.log(this.fireStore);
    
    this.dataService.getData();

    this.authService.user$.subscribe(user => {
      if (user){
        this.authService.currUser.set({
          email: user.email!,
          userName: user.displayName!,
        })
      } else {
        this.authService.currUser.set(null);
      }
      console.log(this.authService.currUser());
    })
  }
  title = 'game-forum';
}
