import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { firebaseConfig } from './enviroments/enviroment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app/app.routes';

  bootstrapApplication(AppComponent, {
    providers: [
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideRouter(routes, withEnabledBlockingInitialNavigation()),
    ]
  })
  // .catch((err) => console.error(err));