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
  newsItem: NewsItem | undefined;

  newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Maryland Tech Invitational 2024',
      date: 'June 29-30, 2024',
      content: 'Detailed description about the Maryland Tech Invitational...',
      imageUrl: 'assets/maryland-tech.jpg',
    },
    {
      id: 2,
      title: 'First Tech Challenge World Championship in Houston',
      date: 'April 17-20, 2024',
      content: 'Detailed information about the Houston World Championship...',
      imageUrl: 'assets/houston-championship.jpg',
    },
  ];
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
      'Expoziție de proiecte inovative în inginerie - ambele zile',
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
    schedule: [
      {
        time1: '8:00-9:30',
        demo: 'Check-in',
        time2: '11:00-11:40',
        conference: 'Sesiunea 1',
        topic: '',
      },
      {
        time1: '9:30-10:30',
        demo: 'Inspecții',
        time2: '11:40-12:20',
        conference: 'Catrinel Zaharia',
        topic: '',
      },
      {
        time1: '10:30-10:45',
        demo: 'Ceremonia de deschidere',
        time2: '12:20-12:30',
        conference: 'pauza',
        topic: '',
      },
      {
        time1: '10:45-11:00',
        demo: 'Drivers and coaches meeting',
        time2: '12:30-13:10',
        conference: 'Dan Zaharia',
        topic: 'Meseriile viitorului/Jobs of Tomorrow',
      },
      {
        time1: '11:00-13:00',
        demo: 'Meciuri de calificare',
        time2: '13:10-13:50',
        conference: 'Tudor Tarta',
        topic: 'Dincolo de frica incepe aventura',
      },
      {
        time1: '13:00-14:00',
        demo: 'Pauză de masă',
        time2: '13:50-14:00',
        conference: 'pauza',
        topic: '',
      },
      {
        time1: '14:00-16:00',
        demo: 'Meciuri de calificare',
        time2: '14:00-14:40',
        conference: 'Sesiunea 5',
        topic: '',
      },
      {
        time1: '16:00-16:15',
        demo: 'Pauză',
        time2: '14:40-15:20',
        conference: 'Ioan Doroftei',
        topic: 'Ioan Doroftei',
      },
      {
        time1: '16:15-16:30',
        demo: 'Selecția alianțelor',
        time2: '',
        conference: '',
        topic: '',
      },
      {
        time1: '16:30-18:00',
        demo: 'Semifinale și finale',
        time2: '',
        conference: '',
        topic: '',
      },
      {
        time1: '18:00-18:30',
        demo: 'Ceremonia de premiere și închidere',
        time2: '',
        conference: '',
        topic: '',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const newsId = Number(this.route.snapshot.paramMap.get('id'));
    this.newsItem = this.newsData.find((news) => news.id === newsId);
  }
}
