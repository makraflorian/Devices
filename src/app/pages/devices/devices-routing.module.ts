import { Routes } from "@angular/router";
import { DevicesComponent } from "./devices.component";

const routes: Routes = [
    {
      path: '',
      component: DevicesComponent,
      data: { title: 'Devices - Webkert' }
    }
  ];