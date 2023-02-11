import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-code-snippet',
  templateUrl: './small-code-snippet.component.html',
  styleUrls: ['./small-code-snippet.component.scss']
})
export class SmallCodeSnippetComponent {
  @Input() title?: string;
  @Input() type?: string;
}
