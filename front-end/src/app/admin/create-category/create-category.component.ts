import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [RouterModule, MatSelectModule, MatInputModule,MatFormFieldModule, ReactiveFormsModule, CommonModule
   ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  categoryForm:FormGroup; //form data and validation 

  constructor(private categoryService: CategoryService){
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onSubmit(){
    if(this.categoryForm.valid){
      this.categoryService.addCategory(this.categoryForm.value).subscribe({
        next: (response) => {
          alert('added successfully')
          this.categoryForm.reset();
        },
        error: (error) => {
          alert('Failed to add category. Please try again.');
        }
      })
    } else{
      alert('Please enter a valid category name.'); 
    }
  }
}
