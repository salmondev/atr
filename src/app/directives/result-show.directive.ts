import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxResultShow]'
})
export class ResultShowDirective {

  constructor(private elementRef: ElementRef) {
    console.log('xxxx');
  }


}
