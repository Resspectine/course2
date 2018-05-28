import {Component, Input} from '@angular/core';

@Component({
  selector: 'bottom-header',
  templateUrl: 'bottom-header.component.html',
  styleUrls: ['bottom-header.component.scss'],
})

export class BottomHeaderComponent {
  @Input()
  categories = [
    'Home',
    'Tech',
    'Culture',
    'ENTREPRENEURSHIP',
    'SELF',
    'POLITICS',
    'MEDIA',
    'DESIGN',
    'SCIENCE',
    'WORK',
    'POPULAR',
  ];

}
