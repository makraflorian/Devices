import { MatToolbarModule } from  '@angular/material/toolbar';
import { NgModule } from  '@angular/core';
import { CommonModule } from  '@angular/common';
import { NavComponent } from  './nav.component';
import { MatButtonModule } from  '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
declarations: [NavComponent],
imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
exports: [NavComponent],
})
export class NavModule { }