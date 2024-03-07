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
      name: 'Mirela Țibu',
      imageUrl: '/assets/members/Mirela Tibu.webp',
      mentor: true,
    },
    {
      name: 'Denis Crismariu',
      imageUrl: '/assets/members/Denis Crismariu.jpg',
      quote: 'Just bring the robot outside!',
      instagram: 'https://www.instagram.com/crismariudenis/',
      facebook: 'https://www.facebook.com/crismariu.denis',
      github: 'https://github.com/crismariudenis',
      mentor: true,
    },
    {
      name: 'Alexandru Radu',
      imageUrl: '/assets/members/Alex Radu.jpg',
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
      name: 'Aabhas Jain',
      imageUrl: '/assets/members/Aabhas.jpg',
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
    {
      name: 'Dimitrie Mihai',
      imageUrl: '/assets/members/Dimitrie Mihai.jpg',
      quote:
        'The way to get started is to quit talking and begin doing. (Walt Disney)',
      instagram: 'https://www.instagram.com/dimi.gj/',
      teamLeader: true,
      role: 'Team Leader',
    },
    {
      name: 'Sebastian Tănase',
      imageUrl: '/assets/members/Tanase Sebastian.jpg',
      quote: 'Simple is better',
      instagram: 'https://www.instagram.com/sebastian.f3d/',
      teamLeader: true,
      role: 'Technical Leader',
    },
    {
      name: 'Buruiana Ștefan',
      imageUrl: '/assets/members/Buruiana Stefan.jpg',
      quote: 'The game we play was not compatible with love',
      github: 'https://github.com/Titoxyk',
      teamLeader: true,
      role: 'Technical Captain',
    },
    {
      name: 'Jitaru Andrei-Vlad',
      imageUrl: '/assets/members/Andrei Jitaru.webp',
      quote:
        '“Make your wonderful dream a reality, and it will become your truth.” — N, Pokemon',
      instagram: 'https://www.instagram.com/andrei_vlad.jitaru/',
      teamLeader: true,
      facebook: 'https://www.facebook.com/andrei.vlad.jitariu',
      role: 'Non-technical Leader',
    },
    {
      name: 'Dragos Babusanu',
      imageUrl: '/assets/members/Babusanu Dragos.jpg',
      quote: '',
      role: 'Member',
    },
    {
      name: 'Tudor Moldovanu',
      imageUrl: '/assets/members/Moldovanu Tudor.jpg',
      quote: '',
      role: 'Member',
    },
    {
      name: 'Matei Pachitanu',
      imageUrl: '/assets/members/Pachitanu Matei.jpg',
      quote: '',
      github: '',
      role: 'Member',
    },
    {
      name: 'Victor Tcaciuc',
      imageUrl: '/assets/members/Victor Tcaciuc.webp',
      quote: "Can't find me? Try searching CyLiis labs:)",
      instagram: 'https://www.instagram.com/victor1tcaciuc/',
      facebook: 'https://www.facebook.com/victorgabrieltcaciuc/',
      role: 'Member',
    },
    {
      name: 'Andrei Balasescu',
      imageUrl: '/assets/members/Balasescu Andrei.jpg',
      quote: 'We win these',
      instagram: 'https://www.instagram.com/bala_andrei9/',
      role: 'Member',
    },
    {
      name: 'Matei Galeș',
      imageUrl: '/assets/members/Gales Matei.jpg',
      quote: 'Forza Ferrari',
      instagram: 'https://instagram.com/rata_e_super?igshid=MjEwN2IyYWYwYw==',
      facebook: 'https://m.facebook.com/matei.gales.5',
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
      name: 'Anastasia Nechita',
      imageUrl: '/assets/members/Nechita Anastasia.jpg',
      quote: '',
      role: 'Member',
    },
    {
      name: 'Rares Grecu',
      imageUrl: '/assets/members/Grecu Rares.jpg',
      quote: '',
      role: 'Member',
    },
    // {
    //   name: 'Anna Spac',
    //   imageUrl: '',
    //   quote: '',
    //   role: 'Volunteer',
    // },
    // {
    //   name: 'Antonia Ciobanu',
    //   imageUrl: '/assets/members/Ciobanu Antonia.jpg',
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
