import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Device } from 'src/app/models/device';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    addDevice!: FormGroup;
    identifier?: FormArray;
    use?: FormControl;
    value?: FormControl;
    resourceType?: FormControl
    data: any;
    text?: FormGroup;
    status?: FormControl;
    div?: FormControl;

    createFormControls() {
        this.resourceType = new FormControl("", Validators.required);
        this.use = new FormControl("", Validators.required);
        this.value = new FormControl("", Validators.required);
        this.status = new FormControl("", Validators.required);
      }

    createForm() {
        this.addDevice = new FormGroup({
            identifier: new FormArray([
                
            ]),
            definition: new FormGroup({
                reference: new FormControl(''),
                type: new FormControl(''),
                display: new FormControl('')
            }),
            udiCarrier: new FormArray([
               
            ]),
            status: new FormControl(),
            statusReason : new FormArray([]),
            distinctIdentifier: new FormControl(''),
            manufacturer: new FormControl(''),
            manufactureDate: new FormControl(''),
            expirationDate: new FormControl(''),
            lotNumber: new FormControl(''),
            serialNumber: new FormControl(''),
            deviceName: new FormArray([]),
            modelNumber: new FormControl(''),
            partNumber: new FormControl(''),
            type: new FormGroup({
                text: new FormControl(''),
            }),
            version: new FormArray([]),
            property: new FormArray([]),
            patient: new FormControl(''),
            owner: new FormControl(''),
            text: new FormGroup({
                status: new FormControl(''),
                div: new FormControl('')
            }),
            resourceType: new FormControl('')
        });
    }
    get getIdentifier(): FormArray{
        return this.addDevice?.get('identifier') as FormArray;
      }

    addIdentifier(): void{
        const idFormArray = this.addDevice?.get('identifier') as FormArray;
        idFormArray.push(
          new FormGroup({
            use: new FormControl(),
            system: new FormControl(''),
            value: new FormControl(''),
          })
        );
    }
    get getDeviceName(): FormArray{
        return this.addDevice?.get('deviceName') as FormArray;
      }
    addDeviceName(): void{
        const deviceNameFormArray = this.addDevice?.get('deviceName') as FormArray;
        deviceNameFormArray.push(
          new FormGroup({
            name: new FormControl(''),
            type: new FormControl(''),
          })
        );
    }

    get getUDICarrier(): FormArray{
        return this.addDevice?.get('udiCarrier') as FormArray;
      }
    addUDICarrier(): void{
        const udiFormArray = this.addDevice?.get('udiCarrier') as FormArray;
        udiFormArray.push(
          new FormGroup({
            deviceIdentifier: new FormControl(''),
            issuer: new FormControl(''),
            jurisdiction: new FormControl(''),
          })
        );
    }


    get getStatusReason(): FormArray{
        return this.addDevice?.get('statusReason') as FormArray;
      }
    addStatusReason(): void{
        const statusReasonFormArray = this.addDevice?.get('statusReason') as FormArray;
        statusReasonFormArray.push(
          new FormGroup({
            text: new FormControl(''),
          })
        );
    }

    get getVersion(): FormArray{
        return this.addDevice?.get('version') as FormArray;
      }

    addVersion(): void{
        const versionFormArray = this.addDevice?.get('version') as FormArray;
        versionFormArray.push(
          new FormGroup({
            value: new FormControl()
          })
        );
    }
    get getProperty(): FormArray{
        return this.addDevice?.get('property') as FormArray;
      }
    addProperty(): void{
        const propertyFormArray = this.addDevice?.get('property') as FormArray;
        propertyFormArray.push(
          new FormGroup({
            type: new FormControl(''),
            valueQuantity: new FormControl(''),
          })
        );
    }




    ngOnInit(): void {
        
        this.createForm();
    }

    onSubmit() {
        if (this.addDevice.valid) {
          console.log("Form Submitted!");
          console.log(this.addDevice.value);
          this.addDevice.reset();
          location.reload;
        }
      }

      async addDevicejson(data: Device): Promise<string> {
        this.data = data;
        const uid = this.afs.createId();
        this.data.id = uid;
        await this.afs.collection('Devices').doc(uid).set(this.data);
        return uid;
        
      }
/*
      trackByUid(index: any, item: any) {
        return item.uid;
      }*/
      constructor(private afs: AngularFirestore) {
      }
}
