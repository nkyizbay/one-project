import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!; // If using a user ID
    if (userId) {
      this.userService.getUserData().subscribe((userData) => {
        this.user = userData;
      });
    } else {
      // Handle the case when userId is null
      console.error('User ID is null.');
    }
  }

  saveChanges(): void {
    // You can implement logic to save changes to the backend here
    // For simplicity, we'll just update the user object in-memory
    this.userService.updateUserData(this.user);
    this.location.back(); // Navigate back to the profile page
  }
}
