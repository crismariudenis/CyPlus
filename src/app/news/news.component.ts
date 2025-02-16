import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsSectionComponent {
  newsList: NewsItem[] = [
    {
      id: 1,
      title: '📢 STEMSPIRE: Inspirație prin Ştiință și Competiție! 🤖✨',
      date: 'February 22-23, 2025',
      description: '',
      imageUrl: '../../../assets/news/stemspire.jpg',
    },
  ];

  constructor(private router: Router) {}

  openNewsDetail(newsId: number) {
    this.router.navigate(['/news', newsId]); // Navigate to details page
  }
}
