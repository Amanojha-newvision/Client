import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  model: any = {
    username : '',
    password : ''
  }
  
  constructor(public accountService: AccountService){}
  
  ngOnInit(): void {
  }


  login() {
      this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: () => console.log(Error)
    })
  }

  logout() {
    this.accountService.logout();
  }

}
