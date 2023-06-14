import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private localStorageService: LocalStorageService) { }

  private isClosed = new BehaviorSubject<boolean>(this.getState());

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
    // {
    //   name: "News",
    //   iconUrl: "/assets/icons/info.webp",
    //   url: "/news"
    // },
  ]

  getState() {
    if (this.localStorageService.getItem("isClosed") === null) {
      this.localStorageService.setItem("isClosed", 'true');
    }
    return this.localStorageService.getItem("isClosed") === 'true'
  }

  getIsClosed() {
    return this.isClosed.asObservable();
  }

  toggle() {
    this.isClosed.next(!this.isClosed.value);
    this.localStorageService.setItem("isClosed", this.isClosed.value.toString());
  }

}
