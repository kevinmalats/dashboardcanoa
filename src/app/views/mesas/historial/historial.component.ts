import { Component, OnInit } from '@angular/core';
import { MesaService} from "./../../../services/mesa.service"
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
   id;
   private data:any;
   facturas;
  constructor(private rutaActiva: ActivatedRoute, private mesaService:MesaService) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params.id
    this.mesaService.getMesaByIdHistorial(this.id)
    .subscribe(response=>{
      console.log(response)
      this.data=response;
      this.facturas=this.data.historial

    })
  }

}
