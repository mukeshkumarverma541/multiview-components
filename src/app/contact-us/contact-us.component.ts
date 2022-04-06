import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  constructor(private service: HeaderService) { }

  ngOnInit(): void {

    this.service.headerContactDetails.next(true);

  }

  ngOnDestroy(): void {
    this.service.headerContactDetails.next(false);
  }

}
