/* esto es un modulo de angular */
import { NgModule } from '@angular/core';
/* para poder renderizar las aplicaciones en el navegador */
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';/* app.component.ts */

/* recibe configuracion concreta y define que se va a incorporar al AppModule */
@NgModule({
  /* parte mas importante */
  /* componentes utilizables y visibles en este modulo */
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  /* declara el componente que inicia el modulo */
  bootstrap: [AppComponent]
})
export class AppModule { }
