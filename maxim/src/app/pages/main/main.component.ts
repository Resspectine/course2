import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent {
  constructor(private router: Router) {
  }

  onCreateArticleClick(): void {
    this.router.navigate(['article', 'create'])
  }
}
