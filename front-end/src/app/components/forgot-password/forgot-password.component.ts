import { CommonModule } from '@angular/common';
import { Component, signal , OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone:true,
  imports: [
    RouterModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, CommonModule,MatIconModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  
  passwordForm:FormGroup ;
  hideCurrentPassword: boolean =true;
  hideNewPassword: boolean =true;
  hideConfirmPassword: boolean =true;
 
  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      currentPassword: ['',[
        Validators.required,
        Validators.minLength(8)
      ]],
      newPassword: ['',
       [ Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ]],
      confirmPassword: ['',
       [ Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ], ]
    },
  { 
    validator: this.passwordMatchValidator 
  });
  };

  ngOnInit(): void{
    
  }

   togglePasswordVisibility(field: string) {
    if (field === 'current') {
      this.hideCurrentPassword = !this.hideCurrentPassword;
    } else if (field === 'new') {
      this.hideNewPassword = !this.hideNewPassword;
    } else if (field === 'confirm') {
      this.hideConfirmPassword = !this.hideConfirmPassword;
    }
  }

  passwordMatchValidator(form: FormGroup): {[key: string]: boolean} | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
  onSubmit() {
    this.passwordForm.markAllAsTouched(); 
      if (this.passwordForm.invalid) {
      console.log('Form is invalid');
      return; 
    }
  
    const formData = this.passwordForm.value;
    console.log('Form submitted successfully');
  }
}
