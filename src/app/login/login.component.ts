import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void {
  }

loggedInUser(username:any, password:any) {
  const uname  = username.value;
  const pass = password.value;

    if(pass === '123') {
        this.headerService.loggedInUser.next(uname);
        this.router.navigate(['home'])
    }
    else {
      alert('Please fill password corret');
    }

    console.log(username.value, password.value)
  }

}

