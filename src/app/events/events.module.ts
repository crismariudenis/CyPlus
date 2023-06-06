import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    EventsComponent,
    HeroComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EventsComponent }
    ])
  ]
})
export class EventsModule { }
