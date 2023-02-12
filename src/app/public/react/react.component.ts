import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
  animations: [fadeInOutAnimation]
})
export class ReactComponent {

}
