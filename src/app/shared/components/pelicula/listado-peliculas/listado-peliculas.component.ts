import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss'],
})
export class ListadoPeliculasComponent {
  @Input() listaPeliculasRecibida!: any;

  ngOnChanges() {}
}
