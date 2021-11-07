import { Injectable } from '@angular/core';
import { Arrendatario } from '../models/arrendatario';

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {

  private arrendatarios:Arrendatario[];

  constructor() { 
    this.arrendatarios = [];
  }

  getArrendatarios():Arrendatario[] {
    return this.arrendatarios;
  }

  addArrendatario(arrendatario:Arrendatario) {
    this.arrendatarios.push(arrendatario); 
  }
}
