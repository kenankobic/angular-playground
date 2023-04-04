import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() headerTemplate?: TemplateRef<any>;
  @Input() contentTemplate?: TemplateRef<any>;
}
