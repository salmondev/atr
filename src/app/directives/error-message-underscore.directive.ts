import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxErrorMessageUnderscore]',

})
export class ErrorMessageUnderscoreDirective {

  constructor() { 
    console.log('ErrorUnderscoreDirective Works');
    
  }

}
