import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MesasComponent} from "./mesas.component"
import {DetalleComponent} from "./detalle/detalle.component"

const routes: Routes = [
  {
    path: '',
    component: MesasComponent,
    data: {
      title: 'Ver'
    }
  },
  {
    path: ':id',
    component: DetalleComponent,
    data: {
      title: 'Ver'
    }
  },
  {
    path: 'create',
    component: MesasComponent,
    data: {
      title: 'Ver'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule {}
