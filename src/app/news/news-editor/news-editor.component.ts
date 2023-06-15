import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router, private newsService: NewsService) { }

  article$! : Observable<any>

  ngOnInit(): void {
    this.security()
    this.newsService.init()
    if (this.route.snapshot.data['mode'] != 'new') {
      this.article$ = this.route.params.pipe(
        switchMap((params : Params) => {
          return this.newsService.getNewsItem(params['id'])
        })
      )
    }
    else {
      this.article$ = of({
        id: 'new',
        title : '',
        imageUrl : '',
        text : ''
      })
    }
  }


  async onSubmitForm(article: any) {
    if (article.id == 'new') {
      article.id = Date.now().toString()
      await this.newsService.addNewNews(article)
    } else {
      this.newsService.updateNews(article)
    }
    this.router.navigate(['/news', article.id])
  }

  async onDelete(article: any) {
    if (confirm('Are you sure you want to delete this article?')) {
      await this.newsService.deleteNews(article.id)
      this.router.navigate(['/news'])
    }
  }

  security() {
    if (prompt('Enter password') != environment.password) {
      this.router.navigate(['/news'])
    }
  }
}
