import { Component } from '@angular/core';
import { PlaygroundRoutes } from 'src/app/core/constants/playgroud-routes';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.scss'],
    animations: [fadeInOutAnimation]
})
export class AngularComponent {
    PlaygroundRoutes = PlaygroundRoutes;
}
