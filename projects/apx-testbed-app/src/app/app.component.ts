import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApxTestkSideMenuComponent, TitleColor } from 'apx-testk-side-menu';

@Component({
  selector: 'app-root',
  imports: [ApxTestkSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apx-testbed-app';

  titleColor = TitleColor;
  isAuthenticated = signal(true);

}
