import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculaComponent,
    children: [
      {
        path: 'alta',
        loadChildren: () =>
          import('./pages/alta-peliculas/alta-peliculas.module').then(
            (m) => m.AltaPeliculasModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculaRoutingModule {}
