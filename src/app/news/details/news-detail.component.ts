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
      demo: 'Iullius Mall, parter, langa Starbucks (23 februarie)',
    },
    structure: [
      'Demonstrație meciuri robotică, organizată conform programului BRD FIRST Tech Challenge România (FTC)',
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
      'Crearea unei experiențe interactive: Organizarea unor meciuri demonstrative de robotică în care echipele FTC din România să participe.',
    ],
    demoSchedule: [
      {
        time: '12:00-15:00',
        activity: 'Meciuri demonstrative',
      },
      {
        time: '15:00-16:00',
        activity: 'Pauză de masă',
      },
      {
        time: '16:00-19:00',
        activity: 'Meciuri demonstrative',
      },
    ],
    conferenceSchedule: [
      {
        time: '11:00-11:40',
        speaker: 'Daniel Rusu',
        topic: 'Educația: practică sau teoretică?',
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
