import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private userService: UserService, private router: Router) {}


  ngOnInit(): void {
    this.userService.getUserData().subscribe((userData) => {
      this.user = userData;
    });
  }

  goToEditPage(): void {
    this.router.navigate(['/edit']);
  }
}
