import { Validators } from "@angular/forms";
import { DateValidators } from "src/app/core/validators/date.validators";

export const registerForm = {
    username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    birthdate: [null, [DateValidators.dateBeforeTodayValidator()]],
    gender: [null, Validators.required]
}