import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ArrendatarioService } from '../services/arrendatario.service';


@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ArrendatarioService
  ]
})
export class ArrendatariosModule { }
