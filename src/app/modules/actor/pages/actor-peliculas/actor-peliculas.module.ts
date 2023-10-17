import { ActorPeliculasComponent } from './actor-peliculas.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorPeliculasRoutingModule } from './actor-peliculas-routing.module';
import { TablaActorModule } from 'src/app/shared/components/actor/tabla-actor/tabla-actor.module';
import { ListadoPeliculasModule } from 'src/app/shared/components/pelicula/listado-peliculas/listado-peliculas.module';
import { DetallePaisModule } from 'src/app/shared/components/pais/detalle-pais/detalle-pais.module';
import { DetalleActorModule } from 'src/app/shared/components/actor/detalle-actor/detalle-actor.module';

@NgModule({
  declarations: [ActorPeliculasComponent],
  imports: [
    CommonModule,
    ActorPeliculasRoutingModule,
    TablaActorModule,
    ListadoPeliculasModule,
    DetallePaisModule,
    DetalleActorModule,
  ],
})
export class ActorPeliculasModule {}
