import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css',
})
export class CategoryCarouselComponent {
  currentIndex = 0;
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private route: Router) {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  get visibleCategories() {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      visible.push(
        this.categories[(this.currentIndex + i) % this.categories.length]
      );
    }
    return visible;
  }

  next() {
    if (this.currentIndex < this.categories.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.categories.length - 1;
    }
  }

  goToCategoryPage(cat_id: string) {
    console.log(cat_id);
    this.route.navigateByUrl(`stories-by-category/${cat_id}`);
  }
}
