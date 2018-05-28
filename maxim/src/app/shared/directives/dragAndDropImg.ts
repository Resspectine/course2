import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[drag-and-drop-img]' })
export class DragAndDropImgDirective {
  constructor() {
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragStart(event) {
    // console.log(event)
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {

    event.preventDefault();
    console.log('dkhhlkpt1');
    console.log(event);
    const data = console.log(event.dataTransfer.files);

    // this.drop.next(data);
  }
}
