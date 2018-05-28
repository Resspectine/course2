import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPill, PillsModel } from './pillsModel';

@Component({
  selector: 'pill',
  templateUrl: 'pill.component.html',
  styleUrls: ['pill.component.scss']
})

export class PillComponent {

  @Input() pill: IPill;
  @Input() pillsModel: PillsModel;
  @Output() onRemove = new EventEmitter<IPill>();

  removePill(): void {
    this.onRemove.emit(this.pill);
    this.pillsModel.removePill(this.pill);
  }
}
