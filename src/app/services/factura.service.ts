import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private httpClient: HttpClient)  {}
  private URI= environment.apiUrl+"/factura";
	public getAll = () => {
		return this.httpClient.get(this.URI);
	}
  public getMesas = () => {
 // let headers= this.createRequestHeader();
   return this.httpClient.get(this.URI)
    
   // return this.mesas;
  }
  // private createRequestHeader() {
  //     // set headers here e.g.
  //     let headers = new HttpHeaders({
  //         "Content-Type": "application/json"
          
  //      });

  //     return headers;
  // }
  
  getMesaById(id){
      console.log(id)
      return this.httpClient.post(this.URI+"/id",{id:id})
  }
  create(body){
    
    return this.httpClient.post(this.URI+"/create",{datos:body})
}

 
}
