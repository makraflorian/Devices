import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
    selector: 'delete-dialog',
    templateUrl: './delete.component.html',
})
export class DeleteDialogComponent implements OnDestroy{

    constructor(
        private afs: AngularFirestore,
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){ }
    ngOnDestroy(): void {
        console.log('No idea :P');
    }


    onNoClick(): void {
        this.dialogRef.close();
    }


    deleteDevice(): void{
        console.log(this.data);
        this.afs.collection('Devices').doc(this.data.id).delete();
        this.dialogRef.close();
    }
    
}