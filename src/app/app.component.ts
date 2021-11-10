import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Proyecto Base';
  suma:number = 0;
  val3:number = 0;
  val4:number = 0;
  multiplicacion:number = 0;
  arreglo:Array<number>=[];
  arreglo2:number[] = [];
  objeto:{ dato1:string, dato2:string } = {"dato1" : "", "dato2" : ""};

  objetoPersona = {
    "nombre": "Carlos",
    "apellido": "Palma",
    "hijos": [{
        "nombre": "Eduardito",
        "apellido": "Palma"
      },
      {
        "nombre": "Sergito",
        "apellido": "Palma"
      },
      {
        "nombre": "Andreita",
        "apellido": "Palma"
      }
    ]
  };
  nombreHijo:string="";

  nombre:string = "";
  apellido:string = "";

  cambiarTitulo(titulo:string):void {
    this.title = titulo
  }

  sumar(val1:string, val2:string):void {
    this.suma = Number(val1) + Number(val2)
  }

  multiplicar():void {
    this.multiplicacion = this.val3 * this.val4
  }

  crearArreglo():void {
    this.arreglo2 = [this.val3, this.val4]
  }
  
  crearObjeto():void {
    this.objeto = {
      "dato1" : this.nombre,
      "dato2" : this.apellido
    }
  }

  accederAHijo():void {
    this.nombreHijo = this.objetoPersona.hijos[1].nombre
  }
}
