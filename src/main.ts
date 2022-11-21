import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* AppModule es la parte principal de la aplicacion, es donde estan definidas todas las importaciones, declaraciones de componentes , todo lo que va a utilizar el proyecto, a demas declara cual es el componente inicial*/
import { AppModule } from './app/app.module';/* app.module.ts */
import { environment } from './app/environments/environment';

/* para habilitar el modo produccion */
/* configuracion para luego hacer los despliegues de manera mas optima */
if(environment.production){
  enableProdMode();
} 

/* esta parte es la mas importante */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
