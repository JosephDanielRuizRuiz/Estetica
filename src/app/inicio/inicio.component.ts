import { Component, OnInit } from '@angular/core';
import { Datos } from '../models/datos';
import { DatosServicio } from '../service/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Datos: Datos = {};
  //Para Recibir
  datos: any = [];
  constructor(private DatosService: DatosServicio) {}

  ngOnInit(): void {
    this.getDatos();
  }


  getDatos(){
    this.DatosService.envio().subscribe(
      res => {
        this.datos = res;
      },
      err => console.log(err)
    );
  }
}
