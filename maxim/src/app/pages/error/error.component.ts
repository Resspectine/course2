import {Component, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface IError {
  message: string;
  code: number;
}

@Component({
  selector: 'error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.scss'],
})

export class ErrorComponent implements AfterViewInit {
  message: string;
  code: number;
  constructor(private route: ActivatedRoute) {
    this.message = this.route.snapshot.queryParams.message;
    this.code = this.route.snapshot.queryParams.code;
  }

  ngAfterViewInit() {
    console.log(this.route.snapshot.queryParams);
  }
}
