import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SponsorsComponent } from './core/sponsors/sponsors.component';
import { NewsDetailComponent } from './news/details/news-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SponsorsComponent,
    NewsDetailComponent
  ],
  imports: [
    FooterComponent,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule
  ],
  exports: [NewsDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
