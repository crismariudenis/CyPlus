import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  diamond : any = [
    'assets/sponsors/diamond/Antibiotice.png',
    'assets/sponsors/diamond/Asociatia Umanitara Tester Grup.png',
    'assets/sponsors/diamond/Deus.png',
    'assets/sponsors/diamond/Heaven Solutions.png',
    'assets/sponsors/diamond/Trans AnaPet.png',
    'assets/sponsors/diamond/WinMentor Logo.png',
  ]

  platinum : any = []

  gold : any = []

  standard : any = [
    'assets/sponsors/standard/AviTop.png',
  ]
}
