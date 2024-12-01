import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //1 adding api url  (comments by asmaa)
  private apiUrl = 'http://127.0.0.1:8000/api/categories';
  
  //2 get all categories
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  //add category
  addCategory(category: {category_name:string}){
    return this.http.post(this.apiUrl, category);
  }

  //update category
  updateCategory(id: number, category: {category_name:string}){
    return this.http.put(`${this.apiUrl}/${id}`, category);
  }

  //delete category
  deleteCategory(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
