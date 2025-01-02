import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userSubscription?: Subscription;

  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    this.usersServices.getCurrentUser().subscribe({
      next: (response) => {
        console.log(response);
      }, error: (error) => {
        console.log(error);
      }
    });
  }

}
