import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditorComponent } from './news-editor/news-editor.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { TextEditorComponent } from './news-editor/text-editor/text-editor.component';
import { MenuComponent } from './news-editor/menu/menu.component';

@NgModule({
  declarations: [
    NewsDetailsComponent,
    NewsListComponent,
    NewsEditorComponent,
    NewsItemComponent,
    TextEditorComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: NewsListComponent },
      { path: 'new', component: NewsEditorComponent, data: { mode: 'new' } },
      { path: ':id', component: NewsDetailsComponent },
      { path: ':id/edit', component: NewsEditorComponent },
      { path: '**', redirectTo: ''}
    ])
  ]
})
export class NewsModule { }
