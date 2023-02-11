import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';
import { SimpleDialog } from 'src/app/shared/components/input-dialog/simple-dialog.component';

@Component({
  selector: 'app-angular-components',
  templateUrl: './angular-components.component.html',
  styleUrls: ['./angular-components.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AngularComponentsComponent {
  constructor(private dialog: MatDialog) { }

  openSimpleDialog(message: string): Observable<any> {
    return this.dialog.open(SimpleDialog, { data: message })
      .afterClosed();
  }

  readonly inputDialogExampleCode = `import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  template: \`
    <div>
      <h2 mat-dialog-title>{{ data | translate }}</h2>      
      <div mat-dialog-actions align="end">
        <button mat-stroked-button (click)="closeDialog()">
          {{ 'SHARED.CLOSE' | translate }}
        </button>
        <button mat-button color="primary" (click)="confirmDialog()" cdkFocusInitial>
          {{ 'SHARED.CONFIRM' | translate }}
        </button>
      </div>
    </div>
    \`
})
export class SimpleDialog {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  confirmDialog(): void {
    this.dialogRef.close(true);
  }
}`
  readonly inputDialogExampleTS = `constructor(private dialog: MatDialog) { }

openSimpleDialog(message: string): Observable<any> {
  return this.dialog.open(SimpleDialog, { data: message})
    .afterClosed();
}`
  readonly inputDialogExampleHTML = `<button mat-flat-button color="primary" (click)="openSimpleDialog('SHARED.CONTINUE_QUESTION')">Test</button>`
}
