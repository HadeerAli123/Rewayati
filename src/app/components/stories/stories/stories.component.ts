import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [ RouterModule, MatButtonModule, MatCardModule, CommonModule ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent {
  stories: Story[] = [];

  constructor(private storyService: StoryService) {
    this.storyService.getAllStories().subscribe((stories: Story[]) => {
      this.stories = stories;
    });
  }
}
