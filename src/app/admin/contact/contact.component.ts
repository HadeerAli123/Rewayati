import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contacts : Contact[]= [];
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next:(response: any) => {
        this.contacts = response.data;
      },
      error: (error: any) => {
        console.error('Error retrieving contacts:', error)}
    });
  }

  deleteMessage(id:number){
      if (confirm('Are you sure you want to delete this message?')) {
        this.contactService.deleteMessage(id).subscribe({
          next: () => {
            alert('Message deleted successfully!');
            this.contacts = this.contacts.filter(contact => contact.id!== id);
          },
          error: () => {
            alert('Failed to delete message. Please try again.');
          }
          
        });
      }
    }
}
