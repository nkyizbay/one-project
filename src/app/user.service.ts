import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any; // Simulated user data storage

  constructor() { }

  getUserData(): Observable<any> {
    // Simulate fetching user data
    const user = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      city: 'Sample City',
      address: '123 Main St'
    };

    return of(user);
  }

  updateUserData(updatedUserData: any): void {
    // Simulate updating user data on the backend
    this.user = { ...this.user, ...updatedUserData };
  }
}
