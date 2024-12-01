import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  
  private apiURL = 'http://127.0.0.1:8000/api/contact-messages';
  constructor(private http: HttpClient) {}

  //add contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiURL, contact);
  }

  //get contact

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiURL);
  }

  //delete contact
  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}

