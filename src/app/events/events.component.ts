import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events = [
    {
      name: 'CyLiis at the League Tournament',
      date: '8-10.03.2024',
      imageUrl: '/assets/events/Regionals.png',
      link: 'https://www.instagram.com/p/C4a70dMonu3/?img_index=1',
    },

    {
      name: 'CyLiis WorldWide Alliance',
      date: '',
      imageUrl: '/assets/events/WordWide.jpg',
      link: 'https://www.instagram.com/p/C4naN9SNZaG/',
    },
    {
      name: '3D Design Workshop',
      date: '16-17.03.2024',
      imageUrl: '/assets/events/3dWorkshop.jpg',
      link: 'https://www.instagram.com/p/C4dK3hgo2FI/',
    },

    {
      name: 'Robotics & AI STEMposium',
      date: '03.03.2024',
      imageUrl: '/assets/events/AC.webp',
      link: 'https://www.instagram.com/p/C3uYXV-qEjQ/',
    },
    {
      name: 'League Meet of Iasi',
      date: '03.02.2024',
      imageUrl: '/assets/events/LM.webp',
      link: 'https://www.instagram.com/p/C2H7mCSoHnE/',
    },
    {
      name: 'League Meet of Penguins',
      date: '20.01.2024',
      imageUrl: '/assets/events/Penguin.webp',
      link: 'https://www.instagram.com/p/C2STiZ3Mr19/',
    },
    {
      name: 'Caravana FabLab',
      date: '',
      imageUrl: '/assets/events/Fablab.webp',
      link: 'https://www.instagram.com/p/C1WqEiApxOe/',
    },

    {
      name: 'Little people great STEAM',
      date: '',
      imageUrl: '/assets/events/LittlePeople.webp',
      link: 'https://www.instagram.com/p/C1WVfO5Lkcq/',
    },
    {
      name: 'ReCyLiis',
      date: '24-26.11.2023',
      imageUrl: '/assets/events/ReCyLiis2.webp',
      link: 'https://www.instagram.com/p/CzyczotORX4/',
    },

    {
      name: 'House of Rookies',
      date: '18-27.08.2023',
      imageUrl: '/assets/events/HOR.webp',
      link: 'https://www.instagram.com/p/CvKWdn_Mh2S/',
    },
    {
      name: 'Bucharest Twin Cup Winner',
      date: '11-13.08.2023',
      imageUrl: '/assets/events/BTC.webp',
      link: 'https://www.instagram.com/p/CwA1tVjovnY/?img_index=1',
    },

  ];
}
