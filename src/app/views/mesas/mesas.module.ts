import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { MesasComponent } from './mesas.component';
import { MesasRoutingModule} from './mesas-routing.module'
import { MesaService } from './../../services/mesa.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [DetalleComponent,MesasComponent, HistorialComponent],
  imports: [
    CommonModule,
    MesasRoutingModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers:[MesaService]
})
export class MesasModule { }
