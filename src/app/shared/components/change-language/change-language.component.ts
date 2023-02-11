import { Component } from '@angular/core';
import { LOCALE_BS, LOCALE_EN } from 'src/app/core/constants/core';
import { TranslatorService } from 'src/app/core/services/translator.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent {
  LOCALE_BS = LOCALE_BS;
  LOCALE_EN = LOCALE_EN;
  selectedLanguage: string = LOCALE_BS;

  constructor(private translatorService: TranslatorService) {
    this.selectedLanguage = translatorService.selectedLanguage;
  }

  changeLanguage() {
    this.selectedLanguage = this.selectedLanguage === LOCALE_BS ? LOCALE_EN : LOCALE_BS
    this.translatorService.useLanguage(this.selectedLanguage);
  }
}
