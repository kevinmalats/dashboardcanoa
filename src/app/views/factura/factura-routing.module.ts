import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FacturaComponent} from "./factura.component"

const routes: Routes = [

  {
    path: ':id',
    component: FacturaComponent,
    data: {
      title: 'Ver'
    }
  }
  // {
  //   path: 'create',
  //   component: FacturaComponent,
  //   data: {
  //     title: 'Ver'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule {}
