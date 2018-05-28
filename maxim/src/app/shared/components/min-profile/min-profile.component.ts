import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'min-profile',
  templateUrl: 'min-profile.component.html',
  styleUrls: ['min-profile.component.scss'],
})

export class MinProfileComponent implements OnInit {
  private toggleText = 'Hide';
  show = false;
  @Input()
  userToken: string;
  constructor() {
  }

  ngOnInit() {
  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Hidе' : 'Show';
  }
}
