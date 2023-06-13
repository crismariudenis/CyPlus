import { Location, PopStateEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private lastPoppedUrl: any;
  private yScrollStack: any = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.router.events.pipe(debounceTime(100)).subscribe((ev:any) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}
