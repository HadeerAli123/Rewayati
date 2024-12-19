import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../interfaces/story';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  // Fetch stories from API
  // private apiURL = 'http://127.0.0.1:8000/api/stories';
  private apiURL = 'https://whitesmoke-coyote-648419.hostingersite.com/api/stories';

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<Story[]>{
    return this.http.get<Story[]>(this.apiURL)
    // .pipe(map((response) => response.data));
  }
}
