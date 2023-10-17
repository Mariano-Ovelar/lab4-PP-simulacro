import { Actor } from './actor';

export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
/* interface IPelicula {
  id?: string;
  nombre: string;
  tipo: tipoPelicula;
  fechaEstreno: Date;
  fotoPelicula: any;
  cantidadPublico: number;
} */

export class Pelicula {
  id?: string = '';
  nombre: string = '';
  tipo: string = '';
  fechaEstreno: string = '';
  cantidadPublico: number = 0;
  fotoPelicula?: any = '';
  actor: any = '';
}
