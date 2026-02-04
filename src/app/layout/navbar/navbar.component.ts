import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class NavbarComponent {
  hidden = signal(false);
  private lastScrollY = 0;

  onScroll(): void {
    const currentScrollY = window.scrollY;
    this.hidden.set(currentScrollY > this.lastScrollY && currentScrollY > 80);
    this.lastScrollY = currentScrollY;
  }
}
