import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule,  FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {merge} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
// import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, FormsModule, MatFormFieldModule, MatButtonModule,
    MatInputModule, MatSelectModule, ReactiveFormsModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  // email style
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  // password style
  hide = signal(true);

  // authentication
  // loginForm: FormGroup;
  credentials = { email: '', password: '' };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]]
    // });

    //email 
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  //email validation
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  //password control
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  login() {
    // this.authService.login(this.credentials).subscribe({
    //   next: (response) => {
    //     console.log('Login successful:', response);
    //     localStorage.setItem('token', response.access_token); 
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.error('Login error:', err);
    //   }
    // });
  }

}

