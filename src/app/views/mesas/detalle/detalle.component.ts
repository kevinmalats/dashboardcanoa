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
 estado:string;
 comandaEstado


//  public readonly countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
//  public locationValue = 'Minsk';


 estados:Array<any>= [
  {id: "i", name: "Iniciado"},
  {id: "e", name: "Elaboracion"},
  {id: "a", name: "Listo"},
  {id: "t", name: "Pagado"}
  
  
];
selectedValue =  null
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
    console.log(this.data[0].estado)
    if(this.data.length>0){
      console.log("entre")
      this.estado=this.data[0].estado
      this.id=this.data[0].id
      console.log(this.estado)
      let newElement={
        id:this.estado,
        name:this.reemplazarNombre(this.estado)
      }
      this.comandaEstado=newElement;
      this.selectedValue=newElement
      let cont=0;
      this.estados.forEach(element => {
        if(element.id==this.selectedValue.id){
          let nuevo=this.estados.indexOf(element)
          if(nuevo+1<this.estados.length){
            this.selectedValue=this.estados[nuevo+1];
          }else{
            this.selectedValue=this.estados[nuevo];
          }
          
          console.log("iguales")
          console.log( this.selectedValue)
           //this.estados.splice(cont,1)
           console.log(this.estados)
         
           return;
          }
          cont++;

      });
    
    }
 
 
   })
  })
  }
  actualizar(){
    if(this.selectedValue.id!="t"){

    
    let body={
     id_comanda:this.id,
     estado:this.selectedValue.id
    }
    this.comandaService.update(body)
    .subscribe(response=>{
      console.log(response)
    })
  }
  }
reemplazarNombre(estado){
  let valor=null
switch(estado){
  case "a":
    valor="Listo";
    break;
   case "e":
     valor="Elaboracion";
     break;
   case "t":
      valor="Pagado";
      break;
   case "i":
     valor="Iniciado";
     break;
    default:
      valor="N/A";      

}
return valor;
}

}
