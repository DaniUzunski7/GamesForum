import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { AuthService } from '../../user/auth.service';
import { userInterface } from '../../types/userInterface';

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
      return this.authService.currUser();
  }

  get firstName(): string {
    return this.userService.user?.userName || '';
  }
  
  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}


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
