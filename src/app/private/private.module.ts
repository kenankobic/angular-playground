import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';



@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PrivateModule { }
