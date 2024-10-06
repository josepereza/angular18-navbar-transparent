import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class HeaderComponent {
  isScrolled = signal(false);

  // @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
