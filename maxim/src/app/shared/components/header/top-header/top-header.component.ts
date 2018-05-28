import {Component, OnInit} from '@angular/core';
import {StaticService} from '../../../../providers/static.service';
import {LoginService} from '../../../../providers/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'top-header',
  templateUrl: 'top-header.component.html',
  styleUrls: ['top-header.component.scss'],
})

export class TopHeaderComponent implements OnInit {
  userToken = '';
  categories: string[];
  dialogOpened = false;
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    state: new FormControl(),
  });
  methods = {
    login: () => {
      this.loginService.loginUser(
        this.loginForm.controls.login.value,
        this.loginForm.controls.password.value
      ).then(el => {
        this.userToken = el;
      });
      this.dialogOpened = false;
    },
    close: () => {

      this.dialogOpened = false;
    }
  };

  constructor(private staticService: StaticService, private loginService: LoginService) {
  }

  async ngOnInit(): Promise<void> {
    this.categories = await this.staticService.getCategories();
  }

  public close(component) {
    this.dialogOpened = false;
  }

  public open(component) {
    this.dialogOpened = true;
  }

  public action(status) {
    this.methods[status]();
  }
}
