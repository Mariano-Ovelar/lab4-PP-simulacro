import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaActorComponent } from './tabla-actor.component';

@NgModule({
  declarations: [TablaActorComponent],
  exports: [TablaActorComponent],
  imports: [CommonModule],
})
export class TablaActorModule {}
