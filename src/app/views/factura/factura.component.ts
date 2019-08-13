import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FacturaService } from './../../services/factura.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
id:any
data:any
cliente:any
pedidos:any
valores:any
constructor(private rutaActiva: ActivatedRoute, private FacturaService:FacturaService) { }


  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id
    this.FacturaService.getMesaById(this.id)
    .subscribe(response=>{
      this.data=response;
      this.pedidos=this.data.pedidos
      this.cliente=this.data.cliente
      this.valores=this.data.valores
      console.log(response)
    })
  }
  guardar(){
    let body={
      
    }
    this.FacturaService.create(body)
    .subscribe(response=>{
      console.log(response)
    })
  }

}
