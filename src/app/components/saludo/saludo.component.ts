//interface OnInit es un hook, un punto del ciclo de vida del componente que permite realizar tareas cuando el componente este listo para ser renderizado
//Input como decorador de una variable
//Output son eventos que ocurren en el hijo y que ejecutan algo en el padre
//EventEmitter para emitir eventos y que se ejecuten en el padre
import { Component , OnInit , Input , Output , EventEmitter} from '@angular/core';

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

  //emitir al componente padre un string
  @Output() mensajeEmmiter : EventEmitter<string> = new EventEmitter<string>();

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

  /* 
  *Ejemplo evento click para enviar un texto al padre (uso de output)
  */
  enviarMensajeAlPadre(): void{ //devuelve un void
    this.mensajeEmmiter.emit(`Hola , ${this.nombre}, texto output desde un click de botón`)
  }

}