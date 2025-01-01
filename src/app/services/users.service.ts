import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SharedHTTPService } from './shared-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private sharedHttpService: SharedHTTPService) { }

  getUsers(): Observable<any> {
    return this.sharedHttpService.get(`users`);
    // .pipe(map((resp: any) =>  resp.data ));
  }

  deleteUser(id: any): Observable<any> {
    return this.sharedHttpService.delete(`users/${id}`);
  }
}
