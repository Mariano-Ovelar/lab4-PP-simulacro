import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/core/models/alert';
import { ActorService } from 'src/app/core/services/actor.service';
import { PeliculaService } from 'src/app/core/services/pelicula.service';

@Component({
  selector: 'app-actor-peliculas',
  templateUrl: './actor-peliculas.component.html',
  styleUrls: ['./actor-peliculas.component.scss'],
})
export class ActorPeliculasComponent {
  listaActores = this.actorSrv.listaActores;
  listaPeliculas = this.peliculaSrv.listaPeliculas;

  actorSeleccionado: any;
  listaPeliculasFiltrada: any;
  constructor(
    private actorSrv: ActorService,
    private peliculaSrv: PeliculaService
  ) {}

  ngOnInit() {
    Alert.cargando('Cargando...', 1000);
    this.actorSrv.traer().then(() => {
      this.listaActores = this.actorSrv.listaActores;
    });
    this.peliculaSrv.traer().then(() => {
      this.listaPeliculas = this.peliculaSrv.listaPeliculas;
    });
  }
  actorElegido($event: any) {
    this.actorSeleccionado = $event;
    this.listaPeliculasFiltrada = this.listaPeliculas.filter(
      (objeto: any) => objeto.actor.id == this.actorSeleccionado.id
    );

    console.log('filtro');
    console.log(this.listaPeliculasFiltrada);
    console.log('actor');
    console.log(this.actorSeleccionado);
    console.log('peliculas');
    console.log(this.listaPeliculas);
  }
}
