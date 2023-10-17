import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculasComponent } from './actor-peliculas.component';

const routes: Routes = [
  {
    path: '',
    component: ActorPeliculasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorPeliculasRoutingModule {}
