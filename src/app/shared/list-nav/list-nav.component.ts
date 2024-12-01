import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface NavOption {
  label: string;
  route: string;
}

@Component({
  selector: 'app-list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.css']
})
export class ListNavComponent {

  @Input() navOptions: NavOption[] = [];  // Asegúrate de que la propiedad esté correctamente decorada con @Input()

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
