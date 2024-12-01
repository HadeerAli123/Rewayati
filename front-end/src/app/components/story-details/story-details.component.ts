import { Component } from '@angular/core';
import { CommentsComponent } from "./comments/comments.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';




@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommentsComponent, MatFormFieldModule, RouterModule, MatTabsModule, MatChipsModule],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css'
})
export class StoryDetailsComponent {




  //review
  onSubmit() {
    const review = (document.getElementById('review') as HTMLTextAreaElement).value;
    console.log('Submitted Review:', review);
  }
  
}
