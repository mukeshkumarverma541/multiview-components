import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin : boolean = false;
  goBackLinks: any;
  contactDetails : boolean = false;
  headerNav: boolean = true;
  loggedInUser : any;

  constructor(private service: HeaderService) { }

  ngOnInit(): void {
    this.service.headerContactDetails.subscribe(res => {
      console.log(res);
      this.contactDetails = res;
    })

    this.service.headerNav.subscribe(data => {
      console.log(data);
      this.headerNav = data;
    })

    this.service.goBackLink.subscribe(data => {
      this.goBackLinks = data;
      console.log(this.goBackLinks);
    })

    this.service.loggedInUser.subscribe(data => {
      this.loggedInUser = data;
    })
    
  }

}
