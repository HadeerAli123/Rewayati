import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [RouterModule, MatSelectModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService) {
    this.categoryForm = new FormGroup({
      cat_id: new FormControl('', [Validators.required]),
      category_name: new FormControl('', [Validators.required])
    });
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
      }
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const cat_id = this.categoryForm.get('cat_id')?.value;
      console.log(cat_id);
      this.updateCategory(cat_id);
      console.log(this.updateCategory(cat_id))
    } else {
      alert('Please fill in the form correctly!');
    }
  }
}


