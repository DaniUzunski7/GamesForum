import { Validator, ValidatorFn } from "@angular/forms";

export function passwordValidator(passwordControl: string, rePasswordControl: string): ValidatorFn {
    return (control) => {
        
        const pass = control.get(passwordControl);
        const rePass = control.get(rePasswordControl);

        console.log(pass, rePass);
        

        if (pass !== rePass){

        }
        
        return null;
    }
} 