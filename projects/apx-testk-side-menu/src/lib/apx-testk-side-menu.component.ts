import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-apx-testk-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './apx-testk-side-menu.component.html',
  styles: ``
})
export class ApxTestkSideMenuComponent {

  isAuthenticated = input(false);
  titleColor = input<TitleColor>(TitleColor.purple);

  onSignOut = output();
  onSignIn = output();

}
