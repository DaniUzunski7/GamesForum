import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  get isLogged() {
      return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  }
  
  constructor( private router: Router, private authService: AuthService) {}


  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  closeMenu(){
    this.menuOpen = false;
  }
}
