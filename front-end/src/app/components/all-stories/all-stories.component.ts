import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StoryService } from '../../services/story.service';
import { Story } from '../../interfaces/story';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-all-stories',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './all-stories.component.html',
  styleUrl: './all-stories.component.css'
})
export class AllStoriesComponent {
  stories : Story[] = [];

  constructor(private storyService: StoryService) {
    this.storyService.getAllStories().subscribe((stories: Story[]) => {
      this.stories = stories;
    });
  }
}
