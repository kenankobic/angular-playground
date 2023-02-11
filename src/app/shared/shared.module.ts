import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DateTimePipe } from './pipes/date-time.pipe';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { MaterialModule } from './material/material.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SmallCodeSnippetComponent } from './components/small-code-snippet/small-code-snippet.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { SimpleDialog } from './components/input-dialog/simple-dialog.component';


const pipes = [
  SafeHtmlPipe,
  DateTimePipe,
];
const components = [
  ChangeLanguageComponent,
  ParagraphComponent,
  SmallCodeSnippetComponent,
  SimpleDialog,
]

@NgModule({
  declarations: [
    ...pipes,
    ...components,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MaterialModule,
    HighlightModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    MaterialModule,
    HighlightModule,
    ...pipes,
    ...components,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
        // themePath: 'path-to-theme.css' // Optional, and useful if you want to change the theme dynamically
      }
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
