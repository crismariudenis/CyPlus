import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-news-details',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {

  eventDetails = {
    title: 'STEMSPIRE',
    date: '22-23 februarie',
    imageUrl: '../../../assets/events/BTC.webp',
    location: {
      conferences: 'Palatul Braunstein (22 februarie)',
      demo: 'Restaurant Moldova (23 februarie)',
    },
    structure: [
      'Demonstrație practică (Demo), organizată conform programului BRD FIRST Tech Challenge România (FTC)',
      'Conferințe STEM',
    ],
    demo: {
      invites: ['15 echipe FTC din toată țara'],
      format: [
        'Simulare de meciuri în format oficial FTC.',
        'Explicații pentru public despre regulile și mecanica jocului.',
        'Standuri la care echipele își prezintă activitatea și robotul.',
      ],
    },
    conferences: {
      invites: [
        'Specialiști din domenii precum inteligența artificială, robotică, inginerie aerospațială, robotică maritimă etc.',
        'Echipele de robotică din Iași.',
      ],
      format: [
        '5 sesiuni de 30 de minute fiecare, urmate de 10 minute de Q&A',
        '1 sesiune specială cu echipele de robotică din Iași, în care acestea vor prezenta complexitatea și aplicabilitatea științei în construcția și programarea unui robot FTC',
      ],
    },
    exhibition: {
      invites: [
        '15 echipe FTC din România și firme atât din domeniul STEM, cât și NON-STEM',
      ],
    },
    objectives: [
      'Promovarea domeniilor STEM: Inspirarea tinerilor prin povești de succes, sesiuni educaționale și demonstrații de tehnologie.',
      'Crearea unei experiențe interactive: Organizarea unui demo de robotică în care echipele FTC din România să participe.',
      'Strângerea de fonduri: pentru a deschide copiilor accesul la tehnologii avansate și inovație.',
    ],
    demoSchedule: [
      {
        time: '8:00-9:30',
        activity: 'Check-in',
      },
      {
        time: '9:30-10:30',
        activity: 'Inspecții',
      },
      {
        time: '10:30-10:45',
        activity: 'Ceremonia de deschidere',
      },
      {
        time: '10:45-11:00',
        activity: 'Drivers and coaches meeting',
      },
      {
        time: '11:00-13:00',
        activity: 'Meciuri de calificare',
      },
      {
        time: '13:00-14:00',
        activity: 'Pauză de masă',
      },
      {
        time: '14:00-16:00',
        activity: 'Meciuri de calificare',
      },
      {
        time: '16:00-16:15',
        activity: 'Pauză',
      },
      {
        time: '16:15-16:30',
        activity: 'Selecția alianțelor',
      },
      {
        time: '16:30-18:00',
        activity: 'Semifinale și finale',
      },
      {
        time: '18:00-18:30',
        activity: 'Ceremonia de premiere și închidere',
      },
    ],
    conferenceSchedule: [
      {
        time: '11:00-11:40',
        activity: 'Sesiunea 1',
        topic: '',
      },
      {
        time: '11:40-12:20',
        activity: 'Catrinel Zaharia',
        topic: '',
      },
      {
        time: '12:20-12:30',
        activity: 'Pauză',
        topic: '',
      },
      {
        time: '12:30-13:10',
        activity: 'Dan Zaharia',
        topic: 'Meseriile viitorului/Jobs of Tomorrow',
      },
      {
        time: '13:10-13:50',
        activity: 'Tudor Tarta',
        topic: 'Dincolo de frică începe aventura',
      },
      {
        time: '13:50-14:00',
        activity: 'Pauză',
        topic: '',
      },
      {
        time: '14:00-14:40',
        activity: 'Sesiunea 5',
        topic: '',
      },
      {
        time: '14:40-15:20',
        activity: 'Ioan Doroftei',
        topic: 'Ioan Doroftei',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const newsId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
