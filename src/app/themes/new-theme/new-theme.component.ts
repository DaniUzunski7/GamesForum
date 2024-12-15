import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.css'
})
export class NewThemeComponent {

  constructor(private themeService: ThemesService) {}

  newTheme(form: NgForm) {

    if (form.invalid){
      console.log('form invalid');
      return;
    } else {
      console.log('valid');
      console.log(form.value);
    }

    this.themeService.addNewTheme(form)
    form.reset();
  }
}
