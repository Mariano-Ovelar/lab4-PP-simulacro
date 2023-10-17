import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaComponent } from './pelicula.component';


@NgModule({
  declarations: [
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule
  ]
})
export class PeliculaModule { }
