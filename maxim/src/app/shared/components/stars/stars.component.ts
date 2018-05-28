import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

export interface IStar {
  id: number
  isFiled: boolean
}

@Component({
  selector: 'stars',
  templateUrl: 'stars.component.html'
})

export class StarsComponent implements OnChanges {
  @Input() maximumStars: number = 5;
  @Input() initialRating: number = 0;
  @Input() isEditableMode = true;
  @Output() onRatingChange = new EventEmitter<number>();
  stars: IStar[] = [];
  score: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialRating']) {
      this.stars = new Array(this.maximumStars)
        .fill({})
        .map((v, i) => ({ id: i, isFiled: i <= this.initialRating - 1 }));
    }
  }

  onMouseOver(event: Event, star: IStar): void {
    if (this.isEditableMode) {
      this.score = star.id + 1;
      this.fillStars();
    }
  }

  onClick(event: Event, star: IStar): void {
    if (this.isEditableMode) {
      this.score = star.id + 1;
      this.initialRating = this.score;
      this.fillStars();
      this.onRatingChange.emit(this.initialRating);

    }
  }

  fillStars(count = this.score): void {
    this.stars.forEach((star: IStar, i: number) => star.isFiled = star.id < count);
  }
}
