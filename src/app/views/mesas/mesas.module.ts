import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { MesasComponent } from './mesas.component';
import { MesasRoutingModule} from './mesas-routing.module'
import { MesaService } from './../../services/mesa.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [DetalleComponent,MesasComponent],
  imports: [
    CommonModule,
    MesasRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialAngularSelectModule

  ],
  providers:[MesaService]
})
export class MesasModule { }
