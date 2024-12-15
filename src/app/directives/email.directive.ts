import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { emailValidator } from '../utils/email.validator';
import { DOMAINS } from '../constants/domains';

@Directive({
  selector: '[appEmailValidator]',
  standalone: true,
  providers: [
    { 
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailValidatorDirective,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  @Input() appEmailValidator: string[] = []; 
  
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    
    const validatorFunction = emailValidator(this.appEmailValidator);
    
    return validatorFunction(control);
  }
}
