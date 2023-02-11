import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AngularAnimationsComponent {
  showFadeInOutAnimationExample: boolean = false;
  readonly fadeInOutAnimationExampleCode = `import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimation = trigger(
  'fadeInOutAnimation',
  [
    transition(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('.3s ease-out',
          style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('.3s ease-in',
          style({ opacity: 0 }))
      ]
    )
  ]
)`
  readonly fadeInOutAnimationExampleHTML = `<div [@fadeInOutAnimation]>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nemo, consectetur tempore nam
  assumenda cumque possimus! Doloremque excepturi minima mollitia, animi similique adipisci sit,
  explicabo quos amet dignissimos iure necessitatibus?
</div>`
  readonly fadeInOutAnimationExampleTS = `@Component({
  ...
  animations: [fadeInOutAnimation]
  ...
})`
}
