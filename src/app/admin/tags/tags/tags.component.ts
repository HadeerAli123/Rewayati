import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tag } from '../../../interfaces/tag';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit, AfterViewInit {
  tags: Tag[] = [];
  displayedColumns: string[] = [
      'name',
      'actions',
    ];
    dataSource = new MatTableDataSource<Tag>(this.tags);

    @ViewChild(MatPaginator) paginator?: MatPaginator;

    constructor(private router: Router, private categoryService: CategoryService) {}

    ngOnInit(): void {
      this.categoryService.getTagsByCategory(5).subscribe({
        next: (response) => {
          console.log('response', response);
          this.tags = response;
          this.dataSource = new MatTableDataSource<Tag>(this.tags);
        }, error: (error) => {
          console.log('error', error);
        }
      });
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator ? this.paginator : null;
    }

    addUser() {
    }

    edit(id: number | string = 0) {
      console.log('Editing tag with ID:', id);
      this.router.navigate([`tag/update/${id}`]);
    }

    deleteTag(id: number | string = 0) {
      if (confirm('Are you sure you want to delete this tag?')) {
        this.categoryService.deleteTag(id).subscribe({
          next: () => {
            alert('Tag deleted successfully!');
            this.tags = this.tags.filter(
              (tag) => tag.id !== id
            );
          },
          error: () => {
            alert('Failed to delete tag. Please try again.');
          },
        });
      }
    }
}
