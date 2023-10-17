import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss'],
})
export class TablaActorComponent {
  @Input() listaActoresRecibida: any;
  @Input() showCheck!: boolean;
  @Output() actorElegido: EventEmitter<any> = new EventEmitter<any>();
  selectedOption: any;

  onOptionSelected(option: number) {
    this.selectedOption = option;
    this.actorElegido.emit(option);
  }
}
