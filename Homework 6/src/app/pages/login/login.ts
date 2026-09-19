import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginPage {
  private fb = inject(FormBuilder);

  store = inject(AuthStore);

  loginForm = this.fb.nonNullable.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.store.login(this.loginForm.getRawValue());
  }
}