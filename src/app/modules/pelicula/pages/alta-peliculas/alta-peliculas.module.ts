import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaPeliculasRoutingModule } from './alta-peliculas-routing.module';
import { AltaPeliculasComponent } from './alta-peliculas.component';
import { TablaActorModule } from 'src/app/shared/components/actor/tabla-actor/tabla-actor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AltaPeliculasComponent],
  imports: [
    CommonModule,
    AltaPeliculasRoutingModule,
    TablaActorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AltaPeliculasModule {}
