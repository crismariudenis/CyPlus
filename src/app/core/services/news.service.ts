import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { getDatabase, ref, update, push, onValue, get, remove } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  private news$ = new Subject()
  private db = getDatabase();

  init() {
    onValue(ref(this.db, 'news'), (snapshot) => {
      this.news$.next(this.resolveNews(snapshot.val()))
    })
  }

  resolveNews(newsRaw : any) {
    return Object.entries(newsRaw)
  }

  addNewNews(news : any) {
    push(ref(this.db, 'news'), news)
  }

  async updateNews(news : any) {
    await update(ref(this.db, `news/${news.id}`), news)
  }

  async deleteNews(news : any) {
    await remove(ref(this.db, `news/${news.id}`))
  }
}
