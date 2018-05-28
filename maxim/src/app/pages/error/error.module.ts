import {NgModule} from '@angular/core';
import {ErrorComponent} from './error.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [ErrorComponent],
  providers: [],
})
export class ErrorModule {
}
