import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  diamond : any = [
    'assets/sponsors/diamond/Antibiotice.webp',
    'assets/sponsors/diamond/Asociatia Umanitara Tester Grup.webp',
    'assets/sponsors/diamond/Deus.webp',
    'assets/sponsors/diamond/Trans AnaPet.webp',
    'assets/sponsors/diamond/WinMentor Logo.webp',
    'assets/sponsors/diamond/EduZone.png'
  ]

  platinum : any = []

  gold : any = []

  standard : any = [
    'assets/sponsors/standard/AviTop.webp',
    'assets/sponsors/standard/meg.webp',
    'assets/sponsors/standard/pro.webp',
    'assets/sponsors/standard/conti.webp',
    'assets/sponsors/standard/volti.webp',
    'assets/sponsors/standard/Certus.png'
  ]
}
