import { Component } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Playground';
  constructor(private hljsLoader: HighlightLoader) {
  }

  // Assume you have a callback function when your app theme is changed
  // onAppThemeChange(appTheme: 'dark' | 'light') {
  //   this.hljsLoader.setTheme(appTheme === 'dark' ? 'assets/styles/solarized-dark.css' : 'assets/styles/solarized-light.css');
  // }
}
