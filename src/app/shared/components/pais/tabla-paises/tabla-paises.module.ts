import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaPaisesComponent } from './tabla-paises.component';

@NgModule({
  declarations: [TablaPaisesComponent],
  exports: [TablaPaisesComponent],
  imports: [CommonModule],
})
export class TablaPaisesModule {}
