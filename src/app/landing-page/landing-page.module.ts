import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { DescriptionComponent } from './description/description.component';
import { NewsSectionComponent } from '../news/news.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    SliderComponent,
    DescriptionComponent,
    NewsSectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LandingPageComponent }]),
  ],
})
export class LandingPageModule {}
