import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainStates } from './main.states';
import { SharedModule } from '../../shared/shared.module';
import { HeaderModule } from '../../shared/components/header/header.module';

@NgModule({
  imports: [
    RouterModule.forRoot(mainStates),
    SharedModule,
    HeaderModule,
  ],
  exports: [],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {
}
