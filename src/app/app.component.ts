import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'ProyectoBase'
  numero1 = 65
  numero2 = 23
  suma = 0
  multiplicacion = 0

  sumar() {
    this.suma = this.numero1 + this.numero2
  }

  multiplicar(num1: number, num2: number) {
    this.multiplicacion = num1 * num2
  }
}
