import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private http: HttpClient) {}

  registerMode = false;
  users: any = {}

  registerToggle() {
    this.registerMode = !this.registerMode
  }

  getUsers() {
    this.http.get('http://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: ()=> console.log('Request completed')
    })
  }

  cancelRegister(event : boolean) {
    this.registerMode = false
  }

}
