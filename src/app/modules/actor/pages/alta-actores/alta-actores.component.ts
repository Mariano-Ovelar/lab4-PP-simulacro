import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/core/models/actor';
import { Alert } from 'src/app/core/models/alert';
import { ActorService } from 'src/app/core/services/actor.service';
import { PaisService } from 'src/app/core/services/pais.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  isLoading = false;
  data: any[] = [];
  paisSelecionado?: any;
  listaPaises = [];
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    fechaNacimiento: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    paisNatal: new FormControl('', [Validators.required]),
  });

  constructor(private actorSrv: ActorService, private paisSrv: PaisService) {}

  ngOnInit() {
    Alert.cargando('Cargando...', 1000);
    this.llenarData();
  }
  llenarData() {
    this.paisSrv.getData().subscribe((data) => {
      this.listaPaises = data;
      console.log(this.listaPaises);
    });
  }

  selecionPais($event: any) {
    this.form.controls.paisNatal.setValue($event);
    this.paisSelecionado = $event;
  }
  guardar() {
    Alert.cargando('Espere un momento...', 2000);
    this.actorSrv
      .guardar(this.form.value as Actor)
      .then(() => {
        this.form.reset();
        setTimeout(() => {
          Alert.mensajeConfirmacion(
            'Se a agregaro un nuevo actor exitosamente.'
          );
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          Alert.mensajeError('Error', 'No se pudo agregar al actor.');
        }, 1000);
      });
  }
}
