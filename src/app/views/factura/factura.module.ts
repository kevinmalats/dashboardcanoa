import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { FacturaRoutingModule} from './factura-routing.module';
import { FacturaService } from './../../services/factura.service';


@NgModule({
  declarations: [FacturaComponent],
  imports: [
    CommonModule,
    FacturaRoutingModule
  ],
  providers:[FacturaService]
})
export class FacturaModule { }
