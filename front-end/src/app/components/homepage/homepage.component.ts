import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCarouselComponent } from "./category-carousel/category-carousel.component";
import { AdvertismentsComponent } from "./advertisments/advertisments.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CategoryCarouselComponent, AdvertismentsComponent, BookCollectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


}
