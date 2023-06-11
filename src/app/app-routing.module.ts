import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'admin', loadChildren: () => import('./news-editor/news-editor.module').then(m => m.NewsEditorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
