import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosServicio {

  API_URI1 ='';

  constructor(private http: HttpClient) { }

  envio(){
    return this.http.get(`${this.API_URI1}`);
  }
}
