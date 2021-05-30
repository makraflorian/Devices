import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';
import { NavModule } from './pages/nav/nav.module';
import { AddModule } from './pages/add/add.module';
import { DevicesModule } from './pages/devices/devices.module';
import { DevicesComponent } from './pages/devices/devices.component';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';
import { UpdateModule } from './update/update.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HomeModule,
    NavModule,
    AddModule,
    DevicesModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    UpdateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
