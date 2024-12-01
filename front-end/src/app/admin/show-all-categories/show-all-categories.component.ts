import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-all-categories',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './show-all-categories.component.html',
  styleUrl: './show-all-categories.component.css'
})
export class ShowAllCategoriesComponent implements OnInit {

  categories: any[] = [];


  constructor(private router: Router , private categoryService:CategoryService){}

  ngOnInit(): void {
this.categoryService.getAllCategories().subscribe((data) => {
  console.log(data); 
  this.categories = data;
})  }
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  editCategory(cat_id: number) {
    console.log('Editing category with ID:', cat_id);
    this.router.navigate([`category/update/${cat_id}`]);
  }

  deleteCategory(cat_id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(cat_id).subscribe({
        next: () => {
          alert('Category deleted successfully!');
          this.categories = this.categories.filter((category) => category.cat_id !== cat_id);
        },
        error: () => {
          alert('Failed to delete category. Please try again.');
        },
      });
    }
  }
}
