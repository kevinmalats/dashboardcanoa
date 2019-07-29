import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MesaService} from "./../../../services/mesa.service"
import { ComandaService} from "./../../../services/comanda.service"
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from "./../../../../environments/environment";
import * as io from 'socket.io-client';
import * as Rx from "rxjs";
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
 id:any
 private socket;
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
 this.connect()
 console.log("estamos activo"+this.id)
  this.mesaService.getMesaById(this.id)
  .subscribe(response=>{
   this.mesa=response
   this.mesa=this.mesa.mesa[0]
   
   console.log(this.mesa)
     this.getComanda()
  })
  }
  actualizar(){
    console.log("no es t")
   
      console.log("t")
    
    let body={
     id_comanda:this.id,
     estado:this.selectedValue.id
    }
    this.comandaService.update(body)
    .subscribe(response=>{
  
      let data:any=response
      console.log(data.result)
      
    })
  
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
getComanda(){
  this.comandaService.getComandaByMesa(this.id)
  .subscribe(response=>{
   this.data=response
   this.data=this.data.plu
  
   if(this.data.length>0){
     console.log("entre")
     this.estado=this.data[0].estado
     this.id=this.data[0].id
    
     let newElement={
       id:this.estado,
       name:this.reemplazarNombre(this.estado)
     }
     this.comandaEstado=newElement;
     this.selectedValue=newElement
     let cont=0;
     let bander=true
     this.estados.forEach(element => {
       console.log("cont"+cont)
       console.log(element.id,this.selectedValue.id)
       if(element.id==this.selectedValue.id && bander==true){
         let nuevo=this.estados.indexOf(element)
         console.log("nuevo")
         console.log(nuevo)
         console.log(this.estados.length)
         if(nuevo+1<this.estados.length){
           this.selectedValue=this.estados[nuevo+1];
         }else{
           console.log("else")
           console.log(nuevo)
           this.selectedValue=this.estados[nuevo];
         }
         
         console.log("iguales")
         console.log( this.selectedValue)
          //this.estados.splice(cont,1)
          console.log(this.estados)
        
          bander=false
         }
         cont++;
         
     });
   
   }


  })
}

connect():Rx.Subject<MessageEvent> {
  
    this.socket = io(environment.baseUrl);
  
    this.socket.emit("wating","hola enfermera" )
    this.socket.on("result", (result)=>{
      console.log("resultado socket")
      console.log(result)
      let data:any=result
      this.estado=result.estado
      let newElement={
        id:this.estado,
        name:this.reemplazarNombre(this.estado)
      }
      this.comandaEstado=newElement;
      this.selectedValue=newElement
     let cont=0;
     let bander=true
     this.estados.forEach(element => {
       console.log("cont"+cont)
       console.log(element.id,this.selectedValue.id)
       if(element.id==this.selectedValue.id && bander==true){
         let nuevo=this.estados.indexOf(element)
         console.log("nuevo")
         console.log(nuevo)
         console.log(this.estados.length)
         if(nuevo+1<this.estados.length){
           this.selectedValue=this.estados[nuevo+1];
         }else{
           console.log("else")
           console.log(nuevo)
           this.selectedValue=this.estados[nuevo];
         }
         
         console.log("iguales")
         console.log( this.selectedValue)
          //this.estados.splice(cont,1)
          console.log(this.estados)
        
          bander=false
         }
         cont++;
         
     });
   
      
      //this.data=result
      
    })
   this.socket.on("connect", function(){
     console.log("conectado")
   }) ;
   this.socket.on("disconnect", function(){
     console.log("Disconnect")
   })
   let observer={
     next:(data:Object)=>{
       this.socket.emit("message",JSON.stringify(data))
     },
   };
    
 return Rx.Subject.create(observer)

}

}
