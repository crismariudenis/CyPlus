import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  constructor(private newsService: NewsService) {}

  news$ : Observable<any> = this.newsService.getNews()
}
