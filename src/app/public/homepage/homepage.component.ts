import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [fadeInOutAnimation]
})
export class HomepageComponent {

}
