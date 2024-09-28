import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudapp';

  Tareas:any[]=[
    {
      "nombre":"leer",
      "descripcion":"leer un libro de historia"
    }
  ];
  long:number;
  tareaEditar:any;

  nombre:string;
  descripcion:string;
  nombreEditar:string;
  descEditar:string;

  constructor(){}

  ngOnInit(): void {
    this.obtenerfinal();
  }

  obtenerfinal(){
    this.long=this.Tareas.length;
  }

  Agregar(){
    const nuevatarea={
      "nombre":this.nombre,
      "descripcion":this.descripcion
    }
    this.Tareas.push(nuevatarea);
    this.obtenerfinal();
    this.nombre="";
    this.descripcion="";
  }

  Editar(i:any){
    alert("usted va a ediatr la tarea. "+ this.Tareas[i].nombre)
    this.nombreEditar= this.Tareas[i].nombre;
    this.descEditar=this.Tareas[i].descripcion;
    this.tareaEditar=i;
  }
  Cambios(){
    const tareaEditada={
      "nombre":this.nombreEditar,
      "descripcion":this.descEditar
    }
    this.Tareas.splice(this.tareaEditar,1,tareaEditada);
  }

  Eliminar(id:any){
    this.Tareas.splice(id,1);
  }

  

}
