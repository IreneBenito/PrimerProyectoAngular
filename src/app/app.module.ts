/* esto es un modulo de angular */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  //todos los imports seran aplicables a los componentes declarados o inferiores
  imports: [
    BrowserModule,
    //añadimos modulo para ngModel
    FormsModule
  ],
  providers: [],
  /* declara el componente que inicia el modulo */
  bootstrap: [AppComponent]
})
export class AppModule { }
