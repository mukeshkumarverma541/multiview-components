import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerContactDetails = new BehaviorSubject(false);
  headerNav = new BehaviorSubject(true);
  goBackLink = new BehaviorSubject({text: '', url : '/'});
  loggedInUser = new BehaviorSubject('');

  constructor() { }
}
