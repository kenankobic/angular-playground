import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  template: `
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
    `
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

}