import { Component } from '@angular/core';
import { userForAuth } from '../../types/user';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {
  user: any = localStorage.getItem('user');
}
