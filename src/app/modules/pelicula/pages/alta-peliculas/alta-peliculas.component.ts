import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/core/models/alert';
import { Fecha } from 'src/app/core/models/fecha';
import { Pelicula } from 'src/app/core/models/pelicula';
import { ActorService } from 'src/app/core/services/actor.service';
import { PeliculaService } from 'src/app/core/services/pelicula.service';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss'],
})
export class AltaPeliculasComponent {
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    tipo: new FormControl('', [Validators.required]),
    fechaEstreno: new FormControl('', [Validators.required]),
    cantidadPublico: new FormControl(1, [Validators.required]),
    fotoPelicula: new FormControl(null, [Validators.required]),
    actor: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private peliculaSrv: PeliculaService,
    private actorSrv: ActorService
  ) {}

  actorSeleccionado?: any;

  generosPelicula = ['terror', 'comedia', 'amor', 'otros'];
  listaActores: any;
  img: string = '';

  ngOnInit() {
    Alert.cargando('Cargando...', 1000);
    this.actorSrv.traer().then((actores) => {
      this.listaActores = actores;
    });
  }

  actorElegido($event: any) {
    this.actorSeleccionado = $event;
    this.form.controls.actor.setValue($event);
  }

  guardar() {
    if (this.form.valid) {
      Alert.cargando('Espere un momento...', 2000);
      this.peliculaSrv
        .guardar(this.form.value as Pelicula)
        .then(() => {
          this.form.reset();
          setTimeout(() => {
            Alert.mensajeConfirmacion(
              'Se a agregarodo una nueva pelicula exitosamente.'
            );
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            Alert.mensajeError('Error', 'No se pudo agregar la pelicula.');
          }, 1000);
        });
    }
  }
  capturarFile($event: any) {
    const file: File = $event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.img = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
