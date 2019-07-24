import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MesaService} from "./../../../services/mesa.service"
import { ComandaService} from "./../../../services/comanda.service"
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
 id:any
 public data:any
 public mesa:any
 selected:any;

 public readonly countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
 public locationValue = 'Minsk';
 testForm: FormGroup;
 optionsSelect = [
   { value: '1', label: 'Option 1' },
   { value: '2', label: 'Option 2' },
   { value: '3', label: 'Option 3' },
 ];
  constructor(private rutaActiva: ActivatedRoute, private comandaService:ComandaService, private mesaService:MesaService) { }

  ngOnInit() {
 this.id=this.rutaActiva.snapshot.params.id
 console.log("estamos activo"+this.id)
  this.mesaService.getMesaById(this.id)
  .subscribe(response=>{
   this.mesa=response
   this.mesa=this.mesa.mesa[0]
   console.log(this.mesa)
   this.comandaService.getComandaByMesa(this.id)
   .subscribe(response=>{
    this.data=response
    this.data=this.data.plu
 
 
   })
  })
  }
  public changeCountry(country) {
    this.locationValue=country
  }

}
