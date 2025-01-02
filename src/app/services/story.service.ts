import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Story } from '../interfaces/story';
import { SharedHTTPService } from './shared-http.service';
@Injectable({
  providedIn: 'root',
})
export class StoryService {
  // Fetch stories from API
  // private apiURL = 'http://127.0.0.1:8000/api/stories';
  private apiURL = 'https://whitesmoke-coyote-648419.hostingersite.com/api';

  constructor(
    private http: HttpClient,
    private sharedHttpService: SharedHTTPService
  ) {}

  // get all stories
  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.apiURL}/stories`);
    // .pipe(map((response) => response.data));
  }

  // get Stories By Category
  getStoriesByCategory(categoryId: number | string): Observable<any> {
    return this.sharedHttpService.get(`stories/byCategory/${categoryId}`);
  }

  // get Stories By tags
  getStoriesByTag(tagId: number | string): Observable<any> {
    return this.sharedHttpService.get(`tags/${tagId}/stories`);
  }

  // get top stories
  getTopStoriesByViews(categoryId: number | string): Observable<any> {
    return this.sharedHttpService.get(`categories/${categoryId}/top-stories`);
  }

  // get published stories
  getPublishStories(): Observable<any> {
    return this.sharedHttpService.get(`stories/published`);
  }

  // get read Later stories
  getReadLaterStories(): Observable<any> {
    return this.sharedHttpService.get(`stories/readlater/all`);
  }

  // get deleted stories
  deletedStories() {
    return this.http.get(`stories/deleted`);
  }

  // story details in reader side
  storyDetails(storyId: number | string): Observable<any> {
    return this.sharedHttpService.get(`story-details/${storyId}`);
  }

  // show story in admin dashboard
  showStory(storyId: number | string): Observable<any> {
    return this.sharedHttpService.get(`stories/${storyId}`);
  }

  // add story
  addStory(category: { category_name: string }): Observable<any> {
    return this.http.post(`${this.apiURL}/stories/`, category);
  }

  // update story
  updateStory(id: number, category: { category_name: string }): Observable<any> {
    return this.http.put(`${this.apiURL}/stories/${id}`, category);
  }

  // publish story
  publishStory(storyId: number | string): Observable<any> {
    return this.sharedHttpService.put(`stories/${storyId}/publish`, {});
  }

  // delete story
  deleteStory(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/stories/${id}`);
  }

  // restore story
  restoreStory(storyId: number | string): Observable<any> {
    return this.sharedHttpService.get(`stories/restore/${storyId}`);
  }

  // start story reading
  StartReading(storyId: number | string): Observable<any> {
    return this.sharedHttpService.post(`stories/${storyId}/start-reading`, {});
  }
}
