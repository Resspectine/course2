import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPill} from '../../../shared/components/pillsInput/pillsModel';
import {IProfile} from '../profile.component';

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {
  @Input() profile: IProfile;
  @Output() onSubmitClick = new EventEmitter();
  tagPills: IPill[] = [];
  profileEditGroup: FormGroup = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.maxLength(255)])
    }
  );

  ngOnInit(): void {
    this.profileEditGroup.controls['description'].setValue(this.profile.description);
  }

  onSubmit(): void {
    console.log('Submit');
    this.onSubmitClick.emit();
  }
}

