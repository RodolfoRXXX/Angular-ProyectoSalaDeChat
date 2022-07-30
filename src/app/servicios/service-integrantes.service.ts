import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Integrante } from '../entidades/integrantes';
import { Mensaje } from '../entidades/mensajes';
import { INTEGRANTES, MENSAJES } from '../mock-integrantes';

@Injectable({
  providedIn: 'root'
})
export class ServiceIntegrantesService {
  objNulo: Integrante = {id:0,nombre:"",color:"",foto:"",active:false};
  objNuloMensaje: Mensaje = {id:0,nombre:"", mensaje:"",color:""};

  constructor() { }

  private id = new BehaviorSubject<number>(-1);
  public customId = this.id.asObservable();

  public setId( idInt: number ):void{
    this.id.next(idInt);
  }

  private mensaje = new BehaviorSubject<Mensaje>(this.objNuloMensaje);
  public customMensaje = this.mensaje.asObservable();

  public setIntegrante( int: Mensaje ):void{
    this.mensaje.next(int);
  }

  getIntegrantes() : Observable<Integrante[]>{
    return new Observable( (obs:Observer<Integrante[]>) => {
      obs.next(INTEGRANTES);
      obs.complete();
    } )
  }

  getMensajes() : Observable<Mensaje[]>{
    return new Observable( (obs:Observer<Mensaje[]>) => {
      obs.next(MENSAJES);
      obs.complete();
    } )
  }

  getCliente( id: number ) : Observable<Integrante>{
    return new Observable( (obs:Observer<Integrante>) => {
      const result = INTEGRANTES.find( (element => element.id == id || element.active == true ) );
      if(result != undefined){
        obs.next(result);
      } else{
        obs.next(this.objNulo);
      }
      obs.complete();
    } )
  }

  cambiarEstadoSeleccionado( id: number ){
    let index = INTEGRANTES.findIndex(element => element.id == id)
    for (let i = 0; i < INTEGRANTES.length; i++) {
      INTEGRANTES[i].active = false;
    }
    if(index > -1){
      INTEGRANTES[index].active = true;
    }
  }

  agregarMensaje( mensaje: Mensaje ){
    MENSAJES.push(mensaje);
    this.setIntegrante(mensaje);
  }

}
