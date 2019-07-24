import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { MesasComponent } from './mesas.component';
import { MesasRoutingModule} from './mesas-routing.module'
import { MesaService } from './../../services/mesa.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DetalleComponent,MesasComponent],
  imports: [
    CommonModule,
    MesasRoutingModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers:[MesaService]
})
export class MesasModule { }
