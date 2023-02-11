import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-angular-styles',
  templateUrl: './angular-styles.component.html',
  styleUrls: ['./angular-styles.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AngularStylesComponent {

}
