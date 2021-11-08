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

  cambiarTitulo(titulo:string):void {
    this.title = titulo
  }

  sumar(val1:string, val2:string):void {
    this.suma = Number(val1) + Number(val2)
  }

  multiplicar():void {
    this.multiplicacion = this.val3 * this.val4
  }
}
