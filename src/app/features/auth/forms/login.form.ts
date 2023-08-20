import { Validators } from "@angular/forms";

export const loginForm = {
    email: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
}