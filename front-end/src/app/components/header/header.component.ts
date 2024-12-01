import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  categories:any[] =[]
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
  ngOnInit(): void {
   
  }
}
