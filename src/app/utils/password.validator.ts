import { Validator, ValidatorFn } from "@angular/forms";

export function passwordValidator(passwordControl: string, rePasswordControl: string): ValidatorFn {
    return (control) => {
        
        const pass = control.get(passwordControl);
        const rePass = control.get(rePasswordControl);        

        if (pass !== rePass){

        }
        
        return null;
    }
} 