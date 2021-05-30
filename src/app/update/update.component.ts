import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'update-dialog',
    templateUrl: './update.component.html'
})
export class UpdateComponent{

    newResourceType?: any;
    newStatus?: any;
    newManufacturer?: any;
    newManufactureDate?: any;
    newExpirationDate?: any;
    newSerialNumber?: any;
    newModelNumber?: any;
    newOwner?: any;
    newPatient?: any;

    constructor(
        private afs: AngularFirestore,
        public dialogRef2: MatDialogRef<UpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


        onNoClick(): void{
            this.dialogRef2.close();
        }

        updateDevice(): void{
            if(this.newResourceType != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    resourceType: this.newResourceType})
            }
            if(this.newStatus != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    status: this.newStatus})
            }
            if(this.newManufacturer != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    manufacturer: this.newManufacturer})
            }
            if(this.newManufactureDate != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    manufactureDate: this.newManufactureDate})
            }
            if(this.newExpirationDate != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    expirationDate: this.newExpirationDate})
            }
            if(this.newSerialNumber != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    serialNumber: this.newSerialNumber})
            }
            if(this.newModelNumber != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    modelNumber: this.newModelNumber})
            }
            if(this.newOwner != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    owner: this.newOwner})
            }
            if(this.newPatient != undefined){
                this.afs.collection('Devices').doc(this.data.id).update({
                    patient: this.newPatient})
            }

            
            this.dialogRef2.close();
        }
}