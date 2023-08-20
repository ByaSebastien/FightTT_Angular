import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { registerForm } from '../../forms/register.form';
import { GenderEnum } from '../../enums/gender.enum';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg!: FormGroup
  GenderEnum = GenderEnum

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      ...registerForm
    });
  }

  onSubmit(): void {
    Object.keys(this.fg.controls).forEach((key) => {
      this.fg.controls[key].markAsDirty();
    });
    if (this.fg.invalid) {
      return;
    }
    this._authService.register(this.fg.value).subscribe({
      next: response => {
        this._sessionService.start(response);
        console.log("Registered and connected");
        this._router.navigate(['home']);
      },
    })
  }

}
