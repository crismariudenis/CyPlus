import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  news$ = this.route.params.pipe(
    switchMap((params) => {
      return this.newsService.getNewsItem(params['id'])
    }
  ))
}
