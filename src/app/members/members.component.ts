import { Component } from '@angular/core';
import { member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  team: Array<member> = [
    {
      name: 'Tudor Moldovanu',
      imageUrl: '/assets/members/Moldovanu Tudor.jpg',
      quote: '',
      role: 'Team Leader',
    },
    {
      name: 'Antonia Ciobanu',
      imageUrl: '/assets/members/Ciobanu Antonia.jpg',
      quote: '',
      role: 'Design Captain',
    },
    {
      name: 'Dragos Babusanu',
      imageUrl: '/assets/members/Babusanu Dragos.webp',
      quote: 'Dai si mie o gurita?',
      role: 'Technical Captain',
    },
    {
      name: 'Anastasia Nechita',
      imageUrl: '/assets/members/Nechita Anastasia.jpg',
      quote: '',
      role: 'PR Captain',
    },
    {
      name: 'Matei Pachitanu',
      imageUrl: '/assets/members/Pachitanu Matei.jpg',
      quote: '',
      github: '',
      role: 'Member',
    },
    {
      name: 'Sebastian Tănase',
      imageUrl: '/assets/members/Tanase Sebastian.jpg',
      quote: '🤌',
      instagram: 'https://www.instagram.com/sebastian.f3d/',
      teamLeader: true,
      role: 'Member',
    },
    {
      name: 'Buruiana Ștefan',
      imageUrl: '/assets/members/Buruiana Stefan.webp',
      quote: 'The game we play was not compatible with love',
      github: 'https://github.com/Titoxyk',
      teamLeader: true,
      role: 'Member',
    },
    {
      name: 'Dimitrie Mihai',
      imageUrl: '/assets/members/Dimitrie Mihai.jpg',
      quote:
        'The way to get started is to quit talking and begin doing. (Walt Disney)',
      instagram: 'https://www.instagram.com/dimi.gj/',
      teamLeader: true,
      role: 'Member',
    },
    {
      name: 'Rares Grecu',
      imageUrl: '/assets/members/Grecu Rares.jpg',
      quote: '',
      role: 'Member',
    },
    {
      name: 'Jitaru Andrei-Vlad',
      imageUrl: '/assets/members/Andrei Jitaru.webp',
      quote:
        '“Make your wonderful dream a reality, and it will become your truth.” — N, Pokemon',
      instagram: 'https://www.instagram.com/andrei_vlad.jitaru/',
      teamLeader: true,
      facebook: 'https://www.facebook.com/andrei.vlad.jitariu',
      role: 'Member',
    },

    {
      name: 'Rares Dobrisan',
      imageUrl: '/assets/members/Dobrisan Rares.jpg',
      quote: '',
      role: 'Member',
    },
    // {
    //   name: 'Cezara Sofronia',
    //   imageUrl: '/assets/members/Sofronia Cezara.jpg',
    //   quote: '',
    //   role: 'Member',
    // },

    {
      name: 'Loghinoaia Ilinca-Ioana',
      imageUrl: '/assets/members/Ilinca Loghinoaia.webp',
      quote:
        'Nu-i important dac-ai pierdut sau câștigat, e important că n-ai participat.',
      role: 'Member',
    },

    {
      name: 'Cezara Ioana',
      imageUrl: '/assets/members/cezara.jpg',
      role: 'Member',
    },
    {
      name: 'Mirela Țibu',
      imageUrl: '/assets/members/Mirela Tibu.webp',
      mentor: true,
    },
    {
      name: 'Denis Crismariu',
      imageUrl: '/assets/members/Denis Crismariu.jpg',
      quote: 'I need sleep!',
      instagram: 'https://www.instagram.com/crismariudenis/',
      facebook: 'https://www.facebook.com/crismariu.denis',
      github: 'https://github.com/crismariudenis',
      mentor: true,
    },
    {
      name: 'Alexandru Radu',
      imageUrl: '/assets/members/Alex Radu.webp',
      quote: 'Born to be a SolidWorker',
      instagram: 'https://www.instagram.com/alexandru230/',
      github: 'https://github.com/alexradu04',
      mentor: true,
    },
    {
      name: 'Puricoi Constantin-Cătălin',
      imageUrl: '/assets/members/catalin.webp',
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
      instagram: 'https://www.instagram.com/catalinpuricoi/',
      facebook: 'https://www.facebook.com/catalin.puricoi',
      github: 'https://github.com/catalinpuricoi15',
      mentor: true,
    },
    {
      name: 'Victor Tcaciuc',
      imageUrl: '/assets/members/Victor Tcaciuc.webp',
      quote: "Can't find me? Try searching CyLiis labs:)",
      instagram: 'https://www.instagram.com/victor1tcaciuc/',
      facebook: 'https://www.facebook.com/victorgabrieltcaciuc/',
      mentor: true,
    },
    {
      name: 'Andrei Balasescu',
      imageUrl: '/assets/members/Balasescu Andrei.webp',
      quote: 'We win these',
      instagram: 'https://www.instagram.com/bala_andrei9/',
      mentor: true,
    },
    {
      name: 'Matei Galeș',
      imageUrl: '/assets/members/Gales Matei.jpg',
      quote: 'Forza Ferrari',
      instagram: 'https://instagram.com/rata_e_super?igshid=MjEwN2IyYWYwYw==',
      facebook: 'https://m.facebook.com/matei.gales.5',
      mentor: true,
    },
    {
      name: 'Aabhas Jain',
      imageUrl: '/assets/members/Aabhas.webp',
      quote: 'Did you record it?',
      mentor: true,
    },
    {
      name: 'Amalia Țîlică',
      imageUrl: '/assets/members/Tilica Amalia.jpg',
      quote:
        "There's no way I have a screw loose, because they all fell out (and then I used zipties).",
      instagram: 'https://www.instagram.com/espurr.23/',
      facebook: 'https://www.facebook.com/amaliatilica',
      mentor: true,
    },
    // {
    //   name: 'Anna Spac',
    //   imageUrl: '',
    //   quote: '',
    //   role: 'Volunteer',
    // },

    // {
    //   name: 'Alex Radu Ionut',
    //   imageUrl: '/assets/members/Alex Radu II.jpg',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Andreea Baltatu',
    //   imageUrl: '',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Diana Tipilic',
    //   imageUrl: '/assets/members/Diana Tiplic.webp',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Margot Cristinari',
    //   imageUrl: '',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Denisa Ursu',
    //   imageUrl: '/assets/members/Ursu Denisa.jpg',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Maftei Delia Andrada',
    //   imageUrl: '/assets/members/Delia.webp',
    //   quote: '',
    //   role: 'Volunteer',
    // },
  ];
}
