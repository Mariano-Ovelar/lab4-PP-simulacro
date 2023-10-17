import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaActoresRoutingModule } from './alta-actores-routing.module';
import { AltaActoresComponent } from './alta-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesModule } from 'src/app/shared/components/pais/tabla-paises/tabla-paises.module';

@NgModule({
  declarations: [AltaActoresComponent],
  imports: [
    CommonModule,
    AltaActoresRoutingModule,
    FormsModule,
    TablaPaisesModule,
    ReactiveFormsModule,
  ],
})
export class AltaActoresModule {}
