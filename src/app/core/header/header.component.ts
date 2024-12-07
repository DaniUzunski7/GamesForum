import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  get isLogged(): boolean {
      return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
  
  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/home'])
  }

  userName(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');    
  }
}
