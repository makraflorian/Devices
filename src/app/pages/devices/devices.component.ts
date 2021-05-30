import { Component, AfterViewInit, ViewChild, Query } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent} from '../deleteDevice/delete.component';
import { Device } from 'src/app/models/device';
import { UpdateComponent } from 'src/app/update/update.component';
import { Observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';



@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements AfterViewInit {

    cols = ['resourceType', 'status', 'Device name', 'owner', 'actions'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatSort) sort!: MatSort;

    getActive(): void{
      this.afs.collection<any>('Devices', ref => ref.where('status', '==', 'active').orderBy('id', 'asc')).valueChanges().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    }

    getInactive(): void{
      this.afs.collection<any>('Devices', ref => ref.where('status', '==', 'inactive').orderBy('id', 'asc')).valueChanges().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    }

    constructor(private afs: AngularFirestore, public dialog: MatDialog) {
        this.dataSource = new MatTableDataSource;
        
     }
    ngAfterViewInit(): void{
        this.afs.collection<any>('Devices').valueChanges().subscribe(data => {
            this.dataSource = new MatTableDataSource(data)
        })
     }

     openDialog(data: any): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
          width: '300px',
          data: data
        });
      }

      openUpdateDialog(data: any): void{
        const dialogRef2 = this.dialog.open(UpdateComponent, {
          width: '300px',
          data: data
        })
      }
      

      trackByUid(index: any, item: any) {
        return item.uid;
      }


    

    

     
}
