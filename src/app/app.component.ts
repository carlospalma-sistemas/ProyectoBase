import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Calculadora'
  multiplicacion:number = 0
  valor:number = 0

  multiplicar(num1: any, num2: any) {
    this.multiplicacion = num1 * num2
  }
}


