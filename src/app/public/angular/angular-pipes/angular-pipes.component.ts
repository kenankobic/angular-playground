import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AngularPipesComponent {

  // DateTime
  exampleDate: Date = new Date();
  readonly dateTimePipeCode = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateTime' })
export class DateTimePipe implements PipeTransform {
    transform(dateTime: string | Date, displayTime: boolean = true) {
        if (dateTime == null || dateTime == '')
            return null;
        let dt = new Date(dateTime + (dateTime.toString().length > 10 ? 'Z' : ''));
        let date = this.formatDate(dt);
        let time = this.formatDateTimeToTime(dt);
        return \`\${date}\${displayTime ? ' ' + time : ''}\`;
    }

    // Formats given date to DD.MM.YYYY
    public formatDate(date: Date): string {
        if (date == null)
            return '';
        date = new Date(date);
        return date.getDate() + \".\" + (date.getMonth() + 1) + \".\" + date.getFullYear() + ".";
    }

    // Formats given date's time to HH:MM
    public formatTime(date: Date): string {
        if (date == null)
            return '';
        date = new Date(date);
        let hours = date.getHours() < 10 ? \`0\${date.getHours()}\` : date.getHours();
        let min = date.getMinutes() < 10 ? \`0\${date.getMinutes()}\` : date.getMinutes();
        return \`\${hours}:\${min}\`;
    }

    public formatDateTimeToTime(date: Date | string) {
        if (date == null)
            return '';
        date = new Date(date);
        return this.getHours(date) + ':' + this.getMinutes(date);
    }

    public getHours(date: Date) {
        return (date.getHours() < 10 ? '0' : '') + date.getHours();
    }

    public getMinutes(date: Date) {
        return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    }
}`;
  readonly dateTimePipeExample = `{{ exampleDate | dateTime: true }}`;
  readonly dateTimePipeConsoleLog = `exampleDate: Date = new Date();`;

  // SafeHTML
  readonly safeHtmlPipeCode = `import { Pipe, PipeTransform} from '@angular/core'
    import { DomSanitizer } from '@angular/platform-browser'
    
    @Pipe({ name: 'safeHtml'})
    
    export class SafeHtmlPipe implements PipeTransform  {
      constructor(private sanitized: DomSanitizer) {}
    
      transform(value: string) {
        return this.sanitized.bypassSecurityTrustHtml(value);
      }
    }`;
  readonly safeHtmlPipeExample = '<span>Test</span><br><br><strong>Kenan</strong>';
  readonly safeHtmlPipeExampleHTML = `<div [innerHTML]="exampleCode | safeHtml"></div>`;
  readonly safeHtmlPipeExampleTS = `exampleCode: string = '${this.safeHtmlPipeExample}';`;
}
