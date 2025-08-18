import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ThemesService } from '../themes.service';
import { FirebaseDataService } from '../../utils/firebase.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {

  constructor(private themeService: ThemesService, private router: Router, private firebaseService: FirebaseDataService) {}

  newTheme(form: NgForm) {

    if (form.invalid){
      console.log('form invalid');
      return;
    } 

      this.firebaseService.createTheme(form.value)
      this.router.navigate(['/reviews']);
  }
}
