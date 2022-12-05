//interface OnInit es un hook, un punto del ciclo de vida del componente que permite realizar tareas cuando el componente este listo para ser renderizado
//Input como decorador de una variable
import { Component , OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-saludo', //selector para poder declarar el componente en otro y anidarlos
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

export class SaludoComponent implements OnInit {

  //creamos variable nombre para llamar desde el componente con {{}}
  //con Input le decimos que este nombre lo recibimos desde el componente (padre) que renderiza este componente pero le ponemos un nombre por defecto
  @Input() nombre: string = "Nombre por defecto";
  @Input() nombreUsuario: string = "NombreUsuario por defecto";

  //al constructor se le pueden añadir dependencias y providers
  constructor() {
  }

  // asegurarse que ngOnInit está DESPUES del constructor
  ngOnInit() {
    //tareas previas a la renderizacion del componente .Ej.: peticion http
    console.log("ngOnInit del componente Saludo");
  }
  /* 
  *Ejemplo para gestionar un evento de tipo click en el DOM 
  */
 //metodo de clase que queremos que se ejecute desde la vista
  alertaSaludo(): void{ //devuelve un void
    alert(`Hola , ${this.nombre}, Alerta despachada desde un click de botón`)
  }

}