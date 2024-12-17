import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDpkxhbDHgg8K7H6vwj5VcWA6CsGdDYCT8",
  authDomain: "gameforum-a7568.firebaseapp.com",
  databaseURL: "https://gameforum-a7568-default-rtdb.firebaseio.com",
  projectId: "gameforum-a7568",
  storageBucket: "gameforum-a7568.firebasestorage.app",
  messagingSenderId: "443762424219",
  appId: "1:443762424219:web:09c0cd04030f3d0510893e"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));