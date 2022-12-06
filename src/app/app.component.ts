/* componente de angular */
import { Component } from '@angular/core';

/* inyecta como metadatos a las clases estas propiedades*/
@Component({
  selector: 'app-root', /* nombre de la etiqueta, esta en el index.html*/
  templateUrl: './app.component.html', /* ruta en la cual se encuentra la plantilla, el html a renderizar */
  styleUrls: ['./app.component.scss'] /* pagina de estilos utilizada */
})

/* info pasada a la vista del app.component.html */
export class AppComponent {
  title = 'PrimerProyecto';
  nombre = 'Irene Benito Pinel'/* variable que le pasamos al componente saludo en app.component.html */
  usuario = '@IreneBenito'/* variable que le pasamos al componente saludo en app.component.html */

  //creamos metodo para recibir el mensaje del hijo con el output
  //esta funcion se ejecuta cuando en el hijo saludoComponent se pulse un boton con el emmiter correspondiente
  recibirMensajeDelHijo(evento: string){ //recoge un string
    alert(evento); //hace una alerta del string que recibe  
  }
}
