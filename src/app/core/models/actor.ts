import { Pais } from './pais';

interface IActor {
  id?: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  pais: any;
}

export class Actor {
  id?: string = '';
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';
  pais: any = {};
}
