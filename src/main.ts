import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';

import { firebaseConfig } from './enviroments/enviroment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { routes } from './app/app.routes';

  bootstrapApplication(AppComponent, {
    providers: [
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideRouter(routes, withEnabledBlockingInitialNavigation()),
     importProvidersFrom(
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      })
    ),
  ]})
  .catch((err) => console.error(err));