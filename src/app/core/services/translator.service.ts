import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_BS, LOCALE_EN, STORAGE_LANGUAGE } from '../constants/core';

import { StorageService } from './storage.service';

@Injectable()
export class TranslatorService {
  public readonly defaultLanguage: string = LOCALE_BS;
  public selectedLanguage: string = LOCALE_BS;

  constructor(
    private storageService: StorageService,
    private translateService: TranslateService
  ) {
    this.useLanguage(this.storageService.getData(STORAGE_LANGUAGE) ?? this.defaultLanguage);
  }

  public parseLocale(tokenLanguage: string): string {
    switch (tokenLanguage) {
      case 'ENGLISH':
        return LOCALE_EN;
      case 'BOSNIAN':
      default:
        return LOCALE_BS;
    }
  }

  public useLanguage(language: string): void {
    this.selectedLanguage = language;
    this.translateService.use(this.selectedLanguage);
    this.storageService.storeData(STORAGE_LANGUAGE, this.selectedLanguage);
  }

}
