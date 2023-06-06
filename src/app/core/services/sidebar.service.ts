import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  private isClosed = new BehaviorSubject<boolean>(false);

  menu: any = [
    {
      name: "Home",
      iconUrl: "/assets/icons/cyliis.webp",
      url: "/"
    },
    {
      name: "Events",
      iconUrl: "/assets/icons/event.webp",
      url: "/events"
    },
    {
      name: "Members",
      iconUrl: "/assets/icons/portfolio.webp",
      url: "/members"
    },
  ]

  getIsClosed() {
    return this.isClosed.asObservable();
  }

  toggle() {
    this.isClosed.next(!this.isClosed.value);
  }
        
}
