import { Component, OnInit } from '@angular/core';
import { MesaService } from './../../services/mesa.service'

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {
data:any
  constructor(private mesaService:MesaService) { }
  representsStates(){
    console.log("element.state")
    this.data.forEach(element => {
     
      switch(element.estado){
        case "1":
        element.estado="Iniciado";
        break;
        case "2":
          element.estado="Elaboracion";
          break;
          case "3":
              element.estado="Preliminar";
              break;
      }
    });
  }
  ngOnInit() {
    this.mesaService.getMesas()
    .subscribe(response=>{
     
      this.data=response;
      this.data=this.data.mesa
      this.representsStates()
    })
  
  }
detalle(id){

}
}
