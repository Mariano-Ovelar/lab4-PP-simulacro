import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor.component';

const routes: Routes = [
  {
    path: '',
    component: ActorComponent,
    children: [
      {
        path: '',
        redirectTo: 'Alta-Actores',
        pathMatch: 'full',
      },
      {
        path: 'alta',
        loadChildren: () =>
          import('./pages/alta-actores/alta-actores.module').then(
            (m) => m.AltaActoresModule
          ),
      },
      {
        path: 'actorpelicula',
        loadChildren: () =>
          import('./pages/actor-peliculas/actor-peliculas.module').then(
            (m) => m.ActorPeliculasModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorRoutingModule {}
