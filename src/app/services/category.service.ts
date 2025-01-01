import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //1 adding api url  (comments by asmaa)
  // private apiUrl = 'http://127.0.0.1:8000/api/categories';
  private apiUrl =
    'https://whitesmoke-coyote-648419.hostingersite.com/api';

  //2 get all categories
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/categories`)
      .pipe(map((response) => response.data));
  }

  //add category
  addCategory(category: { category_name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories/`, category);
  }

  //update category
  updateCategory(id: number, category: { category_name: string }) {
    return this.http.put(`${this.apiUrl}/categories/${id}`, category);
  }

  //delete category
  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/categories/${id}`);
  }

  sendSelectedUserCategory(categories: any[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/users/select-categories-and-get-stories`,
      { categories: categories }
    );
  }
}
