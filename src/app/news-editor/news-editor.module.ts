import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsEditorComponent } from './news-editor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsEditorComponent
      }
    ])
  ]
})
export class NewsEditorModule { }
