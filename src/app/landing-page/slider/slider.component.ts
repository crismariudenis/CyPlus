import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit{

  slider : string[] = [
    'assets/slider/1.jpg',
    'assets/slider/2.jpg',
    'assets/slider/3.jpg',
    'assets/slider/4.jpg',
    'assets/slider/5.jpg',
    'assets/slider/6.jpg',
  ]

  imageIndex$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  interval$! : Subscription;

  ngOnInit(): void {
    this.interval$ = interval(5000).subscribe(() => this.onNext())
  }

  image$ : Observable<string> = this.imageIndex$.pipe(
    map((i : number) => this.slider[i])
  )

  next() {
    this.imageIndex$.next((this.imageIndex$.value + 1) % this.slider.length)
  }

  onNext() {
    this.next()
    this.setInterval()
  }
    
  onPrevious() {
    this.imageIndex$.next(!this.imageIndex$.value ? this.slider.length - 1 : this.imageIndex$.value - 1)
    this.setInterval()
  }

  setInterval() {
    this.interval$.unsubscribe()
    this.interval$ = interval(5000).subscribe(() => this.onNext())
  }
}
