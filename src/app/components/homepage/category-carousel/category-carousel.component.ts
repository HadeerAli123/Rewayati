import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';


@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent {
  
  currentIndex = 0;
  categories: any[] = [];

  get visibleCategories() {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      visible.push(this.categories[(this.currentIndex + i) % this.categories.length]);
    }
    return visible;
  }

  
  next(){
    if(this.currentIndex < this.categories.length - 1){
      this.currentIndex++;
    } 
    else {
      this.currentIndex = 0;
    }
  }
  prev(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    } else {
      this.currentIndex = this.categories.length - 1;
    }
  }

  constructor(private categoryService:CategoryService) {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
   }

}
