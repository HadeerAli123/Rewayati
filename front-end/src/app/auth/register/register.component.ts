import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    CommonModule,
  ],
})
export class RegisterComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  categories: any[] = [];
  selectedChips: any[] = [];
  errorMessage = signal('');

  constructor(
    private _formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router,
    private categoriesService: CategoryService
  ) {
    this.firstFormGroup = this._formBuilder.group(
      {
        username: ['', [Validators.required, Validators.maxLength(10)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            ),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            // Validators.pattern(
            //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
            // ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        gender: ['', Validators.required],
        image: ['', Validators.required],
        role: ['reader', Validators.required],
        device_name: ['DESKTOP-KQR577Q', Validators.required ]
      },
      { validators: this.passwordMatchValidator }
    );

    this.secondFormGroup = this._formBuilder.group({
      categories: [[], [this.maxSelectedValidator(3)]],
    });

    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
  }

  onCategChange(event: any): void {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedChips.push(value);
    } else {
      const index = this.selectedChips.indexOf(value);
      if (index !== -1) {
        this.selectedChips.splice(index, 1);
      }
    }
    this.secondFormGroup.controls['categories'].setValue(this.selectedChips);
    this.secondFormGroup.controls['categories'].updateValueAndValidity();
  }

  maxSelectedValidator(max: number) {
    return (control: FormControl) => {
      const value = control.value || [];
      return value.length > max ? { maxSelected: { max } } : null;
    };
  }

  onSubmit() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      this.errorMessage.set('Form data not vaild');
    }
    this.authService
      .register({
        ...this.firstFormGroup.value,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log([...this.secondFormGroup.value]);
          this.categoriesService
            .sendSelectedUserCategory([...this.secondFormGroup.value])
            .subscribe({
              next: (response) => {
                console.log(response);
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                this.router.navigateByUrl('/home');
              }, error(err) {
                console.log(err);
                this.errorMessage.set(err.error.message);
              },
            });
        },
        error: (error) => {
          console.log('error', error);
          this.errorMessage.set(error.error.message);
        },
      });
  }
}
