//interface OnInit es un hook, un punto del ciclo de vida del componente que permite realizar tareas cuando el componente este listo para ser renderizado
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo', //selector para poder declarar el componente en otro y anidarlos
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

export class SaludoComponent implements OnInit {

  //creamos variable nombre para llamar desde el componente con {{}}
  nombre: string = "Irene";

  //al constructor se le pueden añadir dependencias y providers
  constructor() {
  }

  // asegurarse que ngOnInit está DESPUES del constructor
  ngOnInit() {
    //tareas previas a la renderizacion del componente .Ej.: peticion http
    console.log("ngOnInit del componente Saludo");
  }

}