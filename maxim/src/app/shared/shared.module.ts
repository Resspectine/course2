import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { StickyDirective } from './directives/sticky.directive';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DragAndDropImgDirective } from './directives/dragAndDropImg';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    ButtonsModule,
    InputsModule,
    RippleModule,
    DialogsModule,
    PopupModule,
    MarkdownModule,
    LMarkdownEditorModule,
    DropDownsModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    ButtonsModule,
    InputsModule,
    StickyDirective,
    DragAndDropImgDirective,
    RippleModule,
    DialogsModule,
    PopupModule,
    MarkdownModule,
    LMarkdownEditorModule,
    DropDownsModule,
    ...COMPONENTS
  ],
  declarations: [
    StickyDirective,
    DragAndDropImgDirective,
    ...COMPONENTS
  ],
  providers: [],
})

export class SharedModule {
}
