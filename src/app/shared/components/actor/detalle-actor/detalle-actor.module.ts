import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleActorComponent } from './detalle-actor.component';

@NgModule({
  declarations: [DetalleActorComponent],
  exports: [DetalleActorComponent],
  imports: [CommonModule],
})
export class DetalleActorModule {}
