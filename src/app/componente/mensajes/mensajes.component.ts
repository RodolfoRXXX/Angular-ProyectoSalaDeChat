import { Component, OnInit } from '@angular/core';
import { Integrante } from 'src/app/entidades/integrantes';
import { Mensaje } from 'src/app/entidades/mensajes';
import { ServiceIntegrantesService } from 'src/app/servicios/service-integrantes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensajes: Mensaje[];
  mensaje: Mensaje;

  constructor( private svcIntegrantes: ServiceIntegrantesService ) { }

  ngOnInit(): void {
    this.svcIntegrantes.customMensaje
    .subscribe( objeto => { 
          this.mensaje = objeto;
          this.getMensajes();
        } );
  }

  getMensajes(){
    this.svcIntegrantes.getMensajes()
    .subscribe( data =>{
      this.mensajes = data;
    })
  }

}
