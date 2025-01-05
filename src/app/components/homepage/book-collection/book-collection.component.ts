import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [RouterModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css',
})
export class BookCollectionComponent implements OnInit {
  visibleBook: any[] = [];
  booksPerPage: number[] = [];
  stories: Array<Story> = [];

  constructor(private router: Router, private storiesServices: StoryService) {
    this.loadInit();
  }

  ngOnInit(): void {
    this.storiesServices.getTopStoriesByViews().subscribe({
      next: (res) => {
        console.log('res', res);
        this.stories = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  loadInit() {
    // this.visibleBook = this.books.slice(0, 6);
  }

  loadPrevious() {
    // const startIndex = this.visibleBook.length - 6;
    // this.visibleBook = this.books.slice(startIndex, startIndex + 6);
  }

  showDetails(storyId: number | string) {
    this.router.navigateByUrl(``);
  }

  loadMore() {
    this.router.navigateByUrl(``);
  }
}
