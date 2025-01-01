import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  categoryForm: FormGroup; //form data and validation

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.categoryForm = new FormGroup({
      cat_id: new FormControl(
        this.activatedRoute.snapshot.params['id']
          ? this.activatedRoute.snapshot.params['id']
          : null,
        []
      ),
      category_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

  updateCategory(cat_id: number) {
    const categoryData = this.categoryForm.value;

    this.categoryService.updateCategory(cat_id, categoryData).subscribe({
      next: () => {
        alert('Updated successfully');
        this.categoryForm.reset();
      },
      error: () => {
        alert('Failed to update category. Please try again.');
      },
    });
  }

  // onSubmit() {
  //   if (this.categoryForm.valid) {
  //     const cat_id = this.categoryForm.get('cat_id')?.value;
  //     console.log(cat_id);
  //     this.updateCategory(cat_id);
  //     console.log(this.updateCategory(cat_id));
  //   } else {
  //     alert('Please fill in the form correctly!');
  //   }
  // }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value).subscribe({
        next: (response) => {
          alert('added successfully');
          this.categoryForm.reset();
        },
        error: (error) => {
          alert('Failed to add category. Please try again.');
        },
      });
    } else {
      alert('Please enter a valid category name.');
    }
  }
}
