import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProfile} from '../profile.component';

@Component({
  selector: 'view-profile',
  templateUrl: 'view-profile.component.html'
})

export class ViewProfileComponent {
  @Input() profile: IProfile;
  @Output() onEditClick = new EventEmitter();
}
