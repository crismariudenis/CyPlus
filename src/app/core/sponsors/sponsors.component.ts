import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent {
  diamond: any = [
    'assets/sponsors/diamond/Cenit.webp',
    'assets/sponsors/diamond/Tester-Grup.webp',
    'assets/sponsors/diamond/WinMentor Logo.webp',
    'assets/sponsors/diamond/EduZone.png',
    'assets/sponsors/diamond/FabLab Iasi.png',
    'assets/sponsors/diamond/TipoTaida.png',
    'assets/sponsors/diamond/Asociatia LIIS.png',
  ];

  premium: any = [];

  gold: any = [];

  standard: any = [];
}
