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
  name = 'Irene Benito Pinel'
}
