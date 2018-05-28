import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { IPill, PillsModel } from './pillsModel';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pills-input',
  templateUrl: 'pills-input.component.html',
  styleUrls: ['pills-input.component.scss']
})

export class PillsInputComponent implements OnChanges, OnDestroy {

  @Input() selectedPills: IPill[];
  @Input() suggestions: IPill[];
  @Input() alignOptions = { vertical: 'bottom' };
  @Output() onUpdate = new EventEmitter<IPill[]>();
  pillsModel: PillsModel;
  subscription: Subscription;
  pillsInput = new FormControl();
  suggestedPills: IPill[];

  constructor() {
    this.subscription = this.pillsInput.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value: string) => this.handleInput(value))
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPills']) {
      this.pillsModel = new PillsModel();
      this.selectedPills.forEach(x => this.pillsModel.addPill(x))
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  handleInput(value: string): void {
    if (!value) {
      this.suggestedPills = [];
    } else {
      this.suggestedPills = this.suggestions.filter((pill: IPill) => pill.name.toLowerCase().startsWith(value.toLowerCase()))
    }
  }

  addPillToModel(pillToAdd: IPill): void {
    let idx: number = this.suggestions.findIndex((pill: IPill) => pill === pillToAdd);
    this.suggestions.splice(idx, 1);
    idx = this.suggestedPills.findIndex((pill: IPill) => pill === pillToAdd);
    this.suggestedPills.splice(idx, 1);
    this.pillsModel.addPill(pillToAdd);
    this.onUpdate.emit(this.pillsModel.pills);
    this.pillsInput.reset();
  }

  removePillFromModel(pillToRemove: IPill): void {
    this.suggestions.push(pillToRemove);
    this.onUpdate.emit(this.pillsModel.pills);
  }

}
