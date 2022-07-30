import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Integrante } from 'src/app/entidades/integrantes';
import { ServiceIntegrantesService } from 'src/app/servicios/service-integrantes.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  integrante: Integrante;
  idSeleccionado: number;
  formulario: FormGroup;

  constructor( private svcIntegrantes: ServiceIntegrantesService ) { }

  ngOnInit(): void {
    this.svcIntegrantes.customId
    .subscribe( id => {this.idSeleccionado = id;
                       this.obtenerMensajero(this.idSeleccionado);} );
  }

  obtenerMensajero( id: number ){
    this.svcIntegrantes.getCliente( id )
    .subscribe(data => {
      this.integrante = data;
      this.formulario = new FormGroup({
        mensaje: new FormControl('',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(200)
            ]),
        active: new FormControl(false),
        id: new FormControl(this.integrante.id),
        nombre: new FormControl(this.integrante.nombre),
        color: new FormControl(this.integrante.color)
      })
    })
  }

  onSubmit(){
    this.svcIntegrantes.agregarMensaje(this.formulario.value);
    this.formulario.reset();
    this.obtenerMensajero( this.formulario.value.id );
  }

}
