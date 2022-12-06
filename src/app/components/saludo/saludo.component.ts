//interface OnInit es un hook, un punto del ciclo de vida del componente que permite realizar tareas cuando el componente este listo para ser renderizado
//OnDestroy cuando el componente desaparece es cuando se ejecuta
//
//Input como decorador de una variable
//Output son eventos que ocurren en el hijo y que ejecutan algo en el padre
//EventEmitter para emitir eventos y que se ejecuten en el padre
import { Component , OnInit , OnDestroy , OnChanges , Input , Output , EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-saludo', //selector para poder declarar el componente en otro y anidarlos
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

//si sale un error : quick fix :implement missing interfaces
export class SaludoComponent implements OnInit , OnDestroy , OnChanges {

  //creamos variable nombre para llamar desde el componente con {{}}
  //con Input le decimos que este nombre lo recibimos desde el componente (padre) que renderiza este componente pero le ponemos un nombre por defecto
  @Input() nombre: string = "Nombre por defecto";
  @Input() nombreUsuario: string = "NombreUsuario por defecto";

  //emitir al componente padre un string
  @Output() mensajeEmmiter : EventEmitter<string> = new EventEmitter<string>();

  //variable estilo de tipo objeto
  myStyle: object = {
    color: 'grey',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  //al constructor se le pueden añadir dependencias y providers
  constructor() {
  }

  // asegurarse que ngOnInit está DESPUES del constructor
  ngOnInit() {
    //tareas previas a la renderizacion del componente .Ej.: peticion http
    console.log("ngOnInit del componente Saludo");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //tareas al cambiar cosas dentro de un componente.
    console.log("ngOnChanges el componente recibe cambios", changes); //changes te indica los cambios realizados
    console.log("valor anterior", changes['nombreUsuario'].previousValue);
    console.log("valor actual", changes['nombreUsuario'].currentValue);
  }
  ngOnDestroy(): void {
    //tareas tras cerrar un componente.
    console.log("ngOnDestroy el componente desaparece");
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


/* 
 Orden de ciclo de vida de los componentes:
 - 1. ngOnChanges --> modificacion del componente
 - 2. ngOnInit  --> carga de datos
  3. ngDoCheck
  4. ngAfterContentInit
  5. ngAfterContentChecked
  6. ngAfterViewInit
  7.ngAfterViewChecked
  8. ngAfterContentChecked  //se vuelve a lanzar
  9.ngAfterViewChecked  //se vuelve a lanzar
  - 10. ngOnDestroy --> destruccion del componente
*/