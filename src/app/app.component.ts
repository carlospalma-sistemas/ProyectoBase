import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ProyectoBase';
  resultado:number = 0;
  resultado2:number = 0;
  v3:number = 0;
  v4:number = 0;

  sumar(v1:string, v2:string):void {
    this.resultado = Number(v1)+Number(v2);
  }

  multiplicar():void {
    this.resultado2 = this.v3 * this.v4;
  }
}
