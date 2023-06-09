import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  diamond : any = [
    'assets/sponsors/diamond/Antibiotice.svg',
    'assets/sponsors/diamond/Asociatia Umanitara Tester Grup.svg',
    'assets/sponsors/diamond/Deus.svg',
    'assets/sponsors/diamond/Heaven Solutions.svg',
    'assets/sponsors/diamond/Trans AnaPet.svg',
    'assets/sponsors/diamond/WinMentor Logo.svg',
  ]

  platinum : any = []

  gold : any = []

  standard : any = [
    'assets/sponsors/standard/AviTop.svg',
  ]
}
