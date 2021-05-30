import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DevicesComponent } from './devices.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatDialog } from "@angular/material/dialog";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
    
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
