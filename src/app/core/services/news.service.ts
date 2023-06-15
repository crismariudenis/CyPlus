import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, filter, map } from 'rxjs';
import { getDatabase, ref, update, push, onValue, get, remove } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  news : any = []

  private news$ = new BehaviorSubject<any>(null)
  private db = getDatabase();

  init() {
    onValue(ref(this.db, 'news'), (snapshot) => {
      console.log(snapshot.val())
      this.news$.next(this.resolveNews(snapshot.val()))
    })
    this.news$.subscribe((news : any) => {
      this.news = news
    })
  }

  resolveNews(newsRaw : any) {
    return Object.entries(newsRaw).reverse()
  }

  addNewNews(news : any) {
    push(ref(this.db, 'news'), news)
  }

  getNews() {
    return this.news$.pipe(
      filter((news : any) => news !== null),
      map((news : any) => {
        return news.map((item : any) => {
          return item[1]
        }
      )})
    )
  }

  getNewsItem(id : string) {
    return this.news$.pipe(
      filter((news : any) => news !== null),
      map((news : any) => {
        let raw =  news.filter((item : any) => {
          return item[1].id == id
        })
        return raw[0][1]
      })
    )
  }

  async updateNews(news : any) {
    let toUpdate = this.news.find((item : any) => {
      return item[1].id == news.id
    })
    await update(ref(this.db, `news/${toUpdate[0]}`), news)
  }

  async deleteNews(id : any) {
    let deletable = this.news.find((item : any) => {
      return item[1].id == id
    })
    await remove(ref(this.db, `news/${deletable[0]}`))
  }
}
