import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Calculadora'

    numero3: number = 0
    numero4: number = 0
    suma: number = 0
    multiplicacion: number = 0
    resultados: number[] = []

    sumar(num1: string, num2: string): void {
        this.suma = Number(num1) + Number(num2)
        this.resultados.push(this.suma)
    }

    multiplicar(): void {
        this.multiplicacion = this.numero3 * this.numero4
        this.resultados.push(this.multiplicacion)
    }
}


