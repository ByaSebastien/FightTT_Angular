import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { loginForm } from '../../forms/login.form';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      ...loginForm
    })
  }

  onSubmit(): void {
    Object.keys(this.fg.controls).forEach((key) => {
      this.fg.controls[key].markAsDirty();
    });
    if (this.fg.invalid) {
      return;
    }
    this._authService.login(this.fg.value)
      .subscribe({
        next: response => {
          this._sessionService.start(response);
          console.log("Connected");
          this._router.navigate(['home']);
        },
      })
  }
}
