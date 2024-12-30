import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Story } from '../interfaces/story';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  // Fetch stories from API
  // private apiURL = 'http://127.0.0.1:8000/api/stories';
  private apiURL = 'https://whitesmoke-coyote-648419.hostingersite.com/api';

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<Story[]>{
    return this.http.get<Story[]>(`${this.apiURL}/stories`)
    // .pipe(map((response) => response.data));
  }

  //add story
  addStory(category: { category_name: string }) {
    return this.http.post(`${this.apiURL}/stories/`, category);
  }

  //update story
  updateStory(id: number, category: { category_name: string }) {
    return this.http.put(`${this.apiURL}/stories/${id}`, category);
  }

  //delete story
  deleteStory(id: number) {
    return this.http.delete(`${this.apiURL}/stories/${id}`);
  }
}
