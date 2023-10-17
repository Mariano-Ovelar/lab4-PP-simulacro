import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPeliculasComponent } from './listado-peliculas.component';

@NgModule({
  declarations: [ListadoPeliculasComponent],
  exports: [ListadoPeliculasComponent],
  imports: [CommonModule],
})
export class ListadoPeliculasModule {}
