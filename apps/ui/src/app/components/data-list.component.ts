import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Import your AuthService

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit {
  data: any[] = []; // Array to hold the fetched data
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Check if the user is authenticated
    this.isAuthenticated = this.authService.isAuthenticated();

    if (this.isAuthenticated) {
      // Fetch data (example: users/products)
      this.fetchData();
    } else {
      // Redirect to login page if not authenticated
      // Navigate to login page if needed
    }
  }

  // Example fetchData method that simulates data retrieval
  fetchData() {
    // This could be an API call to get the data
    this.data = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ];
  }
}

export class UiComponent {
  // component logic goes here
}
