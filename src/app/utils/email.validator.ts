import { Validator, ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]):ValidatorFn {
    const domainsJoin = domains.join('|');

    const emailRegExp = new RegExp(`^[\\w.-]+@[a-zA-Z\d.-]+\.(${domainsJoin})$`)

    let isValid: boolean 

    return (control) => {   
        
        if (control.value === '' || emailRegExp.test(control.value)){
            isValid = true;
        } else {
            isValid = false;
        }
        
        return isValid ? null : { emailValidator: true};
    };
} 