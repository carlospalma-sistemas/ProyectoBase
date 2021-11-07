import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Que pasen un feliz fin de semana';
  valor:number = 0;

  cambiar():void {
    this.valor = this.valor + 1;  
  }
}
