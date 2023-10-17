import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'actor',
    loadChildren: () =>
      import('./modules/actor/actor.module').then((m) => m.ActorModule),
  },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./modules/pelicula/pelicula.module').then(
        (m) => m.PeliculaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
