import { Component } from '@angular/core';
import { PlaygroundRoutes } from 'src/app/core/constants/playgroud-routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  PlaygroundRoutes = PlaygroundRoutes;
}
