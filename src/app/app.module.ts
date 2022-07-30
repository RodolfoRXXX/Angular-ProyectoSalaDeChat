import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componente/cabecera/cabecera.component';
import { MensajesComponent } from './componente/mensajes/mensajes.component';
import { IntegrantesComponent } from './componente/integrantes/integrantes.component';
import { ControlComponent } from './componente/control/control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MensajesComponent,
    IntegrantesComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
