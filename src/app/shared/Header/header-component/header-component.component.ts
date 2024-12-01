import { Component , Input} from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  @Input() navOptions: { label: string; path: string }[] = [];
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    window.location.reload(); // O redirigir a la página de login
  }
}
