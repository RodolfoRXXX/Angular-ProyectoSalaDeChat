import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Integrante } from 'src/app/entidades/integrantes';
import { ServiceIntegrantesService } from 'src/app/servicios/service-integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  integrantes: Integrante[];
  idSeleccionado: number = 0;

  constructor( private svcIntegrantes: ServiceIntegrantesService ) { }

  ngOnInit(): void {
    this.obtenerIntegrantes();
  }

  obtenerIntegrantes(){
    this.svcIntegrantes.getIntegrantes()
    .subscribe(data => {
      this.integrantes = data;
    })
  }

  seleccionInt( id: number, active: boolean ){
    if(active){
      this.idSeleccionado = 0;
    } else{
      this.idSeleccionado = id;
    }
    this.svcIntegrantes.cambiarEstadoSeleccionado( this.idSeleccionado );
    this.svcIntegrantes.setId( this.idSeleccionado );
  }

}
