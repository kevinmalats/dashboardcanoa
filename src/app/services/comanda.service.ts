import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from "./../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  private URI= environment.apiUrl+"/comanda";
  constructor(private httpClient: HttpClient) { }

  public getComandaByMesa(idMesa){
    
    return this.httpClient.post(this.URI+"/idMesa",{mesa:idMesa})

}
}
