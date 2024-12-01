import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../interfaces/story';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  // Fetch stories from API
  private apiURL = 'http://127.0.0.1:8000/api/stories';
  constructor(private http: HttpClient) { }

  getAllStories(): Observable<Story[]>{
    return this.http.get<Story[]>(this.apiURL);
  }
}
