import { AbstractControl, ValidatorFn } from '@angular/forms';

export class DateValidators {
    static dateBeforeTodayValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.value) {
                return null;
            }

            const selectedDate = new Date(control.value);
            const today = new Date();

            return selectedDate < today ? null : { dateNotBeforeToday: true };
        };
    }
}