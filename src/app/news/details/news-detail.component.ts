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
    ],
    demoSchedule: [
      {
        time: '9:00-9:30',
        activity: 'Check-in',
      },
      {
        time: '9:30-11:00',
        activity: 'Inspecții',
      },
      {
        time: '11:00-11:15',
        activity: 'Ceremonia de deschidere',
      },
      {
        time: '11:15-11:30',
        activity: 'Drivers and coaches meeting',
      },
      {
        time: '11:30-13:30',
        activity: 'Meciuri de calificare',
      },
      {
        time: '13:30-14:30',
        activity: 'Pauză de masă',
      },
      {
        time: '14:30-16:30',
        activity: 'Meciuri de calificare',
      },
      {
        time: '16:45-17:00',
        activity: 'Selecția alianțelor',
      },
      {
        time: '17:00-18:30',
        activity: 'Semifinale și finale',
      },
      {
        time: '18:30-19:00',
        activity: 'Ceremonia de premiere și închidere',
      },
    ],
    conferenceSchedule: [
      {
        time: '11:00-11:40',
        speaker: 'Daniel Rusu',
        topic: 'Educația: practică sau teoretică',
      },
      {
        time: '11:40-12:20',
        speaker: 'Catrinel Zaharia',
        topic: 'Budget Time - relația ta cu banii și tehnologia',
      },
      {
        time: '12:20-12:30',
        speaker: 'Pauză',
        topic: '',
      },
      {
        time: '12:30-13:10',
        speaker: 'Dan Zaharia',
        topic: 'Meseriile viitorului',
      },
      {
        time: '13:10-13:50',
        speaker: 'Tudor Tarta',
        topic: 'Dincolo de frică începe aventura',
      },
      {
        time: '13:50-14:00',
        speaker: 'Pauză',
        topic: '',
      },
      {
        time: '14:00-14:40',
        speaker: 'CyLiis',
        topic: 'Robotul CyLiis',
      },
      {
        time: '14:40-15:20',
        speaker: 'Ioan Doroftei',
        topic: 'Robotică socială',
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const newsId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
