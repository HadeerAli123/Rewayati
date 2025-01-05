import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';

@Component({
  selector: 'app-advertisments',
  standalone: true,
  imports: [RouterModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './advertisments.component.html',
  styleUrl: './advertisments.component.css'
})
export class AdvertismentsComponent implements OnInit {
  stories: Array<Story> = [];

  constructor(private storyServices: StoryService) {}

  ngOnInit(): void {
    this.storyServices.getAdvertisementStoryByLatestStory().subscribe({
      next: (res) => {
        console.log('latest', res);
        this.stories = res;
      }, error: (error) => {
        console.log(error);
      }
    });
  }

}
