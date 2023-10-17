import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePaisComponent } from './detalle-pais.component';

@NgModule({
  declarations: [DetallePaisComponent],
  exports: [DetallePaisComponent],
  imports: [CommonModule],
})
export class DetallePaisModule {}
