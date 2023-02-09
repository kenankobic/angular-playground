import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { TranslatorService } from './services/translator.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { PublicGuard } from './guards/public.guard';
import { PrivateGuard } from './guards/private.guard';
import { RoleGuard } from './guards/role.guard';
import { PendingChangesGuard } from './guards/pending-changes.guard';



@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    // Services
    AuthService,
    StorageService,
    RequestService,
    TranslatorService,
    AlertService,
    // Guards
    PublicGuard,
    PrivateGuard,
    RoleGuard,
    PendingChangesGuard
  ],
})
export class CoreModule {
  // Added translator service to constructor so it will get initialized and it will set the language for the whole app
  constructor(private translatorService: TranslatorService) { }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }
}
