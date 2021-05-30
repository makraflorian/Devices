import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add.component";


const routes: Routes = [
    {
      path: '',
      component: AddComponent,
      data: { title: 'Add device - Webkert' }
    }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  
  export class AddRoutingModule { }