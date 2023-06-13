import { Component } from '@angular/core';
import { member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  team: Array<member> = [
    {
      name: "Buruiana Ștefan",
      imageUrl: "/assets/members/Buruiana Stefan.webp",
      quote: "But it would be funny",
      github: "https://github.com/Titoxyk"
    },
    {
      name: "Călin Ioncioaia",
      imageUrl: "/assets/members/Calin Ioncioaia.webp",
      quote: "I believe in a universe that doesn't care and people who do",
      github: "https://github.com/RocketPrinter"
    },
    {
      name: "Claudia T",
      imageUrl: "/assets/members/Claudia Toma.webp"
    },
    {
      name: "Jitaru Andrei-Vlad",
      imageUrl: "/assets/members/Andrei Jitaru.webp",
      quote: "“Make your wonderful dream a reality, and it will become your truth.” — N, Pokemon",
      instagram: "https://www.instagram.com/andrei_vlad.jitaru/",
      facebook: "https://www.facebook.com/andrei.vlad.jitariu"
    },
    {
      name: "Anton Petru",
      imageUrl: "/assets/members/Anton Petru.webp"
    },
    {
      name: "Antony Guignard",
      imageUrl: "/assets/members/Antony.webp",
      quote: "Toți oamenii mari au fost cândva copii, dar doar câțiva își amintesc de asta",
      instagram: "https://instagram.com/me_ant0ny?igshid=NGExMmI2YTkyZg=="
    },
    {
      name: "Bianca A",
      imageUrl: "/assets/members/Bianca A.webp"
    },
    {
      name: "Enăchescu Alexandra-Maria",
      imageUrl: "/assets/members/Alexandra.webp",
      quote: "“In the midst of chaos, there is also opportunity” - Sun-Tzu ",
      instagram: "https://instagram.com/alexandra_enachescu?igshid=MzNlNGNkZWQ4Mg==",
      facebook: "https://www.facebook.com/alexandramaria.enachescu"
    },
    {
      name: "Alin-Gabriel Motricală",
      imageUrl: "/assets/members/Alin.webp",
      quote: "What we know is a drop. What we do not know… is an ocean",
      github: "https://github.com/FR13ND-ly"
    },
    {
      name: "Alisia",
      imageUrl: "/assets/members/Alisia.webp"
    },
    {
      name: "Amalia Țîlică",
      imageUrl: "/assets/members/Amalia Tilica.webp",
      quote: "There's no way I have a screw loose, because they all fell out (and then I used zipties).",
      instagram: "https://www.instagram.com/espurr.23/"
    },
    {
      name: "Dragoș Aflori",
      imageUrl: "/assets/members/Dragos Aflori.webp"
    },
    {
      name: "Emanuel-Antonio Rotariu",
      imageUrl: "/assets/members/Emmy Rotariu.webp",
      quote: "The bad news is time flies. The good news is you're the pilot.",
      instagram: "https://instagram.com/emmy43262?igshid=NGExMmI2YTkyZg==",
      github: "https://github.com/Emmy43262"
    },
    {
      name: "Loghinoaia Ilinca-Ioana",
      imageUrl: "/assets/members/Ilinca Loghinoaia.webp",
      quote: "Nu-i important dac-ai pierdut sau câștigat, e important că n-ai participat.",
      instagram: "https://instagram.com/ili_log2?igshid=MzNlNGNkZWQ4Mg==",

    },
    {
      name: "Matei Galeș",
      imageUrl: "/assets/members/Matei Gales.webp",
      quote: "Forza Ferrari",
      instagram: "https://instagram.com/rata_e_super?igshid=MjEwN2IyYWYwYw==",
      facebook: "https://m.facebook.com/matei.gales.5",
      github: "https://github.com/DareChocolate"
    },
    {
      name: "Sebastian Tănase",
      imageUrl: "/assets/members/Sebastian Tanase.webp",
      quote: "W",
      instagram: "https://www.instagram.com/sebastian.f3d/"
    },
    {
      name: "Victor Tcaciuc",
      imageUrl: "/assets/members/Victor Tcaciuc.webp",
      quote: "Can't find me? Try searching CyLiis labs:)",
      instagram: "https://www.instagram.com/victor1tcaciuc/",
      facebook: "https://www.facebook.com/victorgabrieltcaciuc/",
      github: "https://github.com/StripierWig208"
    },
    {
      name: "Maftei Delia Andrada",
      imageUrl: "/assets/members/Delia.webp",
      quote: "Je vois la vie en rose <3",
      instagram: "https://www.instagram.com/delia.mft/",
      facebook: "https://www.facebook.com/delia.andrada.m16"
    },
    {
      name: "Denis Crismariu",
      imageUrl: "/assets/members/Denis.webp",
      quote: "L + L = W",
      instagram: "https://www.instagram.com/crismariudenis/",
      facebook: "https://www.facebook.com/crismariu.denis",
      github: "https://github.com/crismariudenis"
    },
    {
      name: "Diana Tiplic",
      imageUrl: "/assets/members/Diana Tiplic.webp"
    },
    {
      name: "Dima Sorin Emanuel",
      imageUrl: "/assets/members/Dima.webp",
      quote: "Hit it with a hammer mate, it will be just fine.",
      instagram: "https://www.instagram.com/sorinemanueldima/",
      facebook: "https://www.facebook.com/profile.php?id=100014784589194",
      github: "https://github.com/SorinEmanuelDima"
    },
    {
      name: "Dimitrie Mihai",
      imageUrl: "/assets/members/Dimitrie Mihai.webp",
      quote: "The way to get started is to quit talking and begin doing. (Walt Disney)"
    },
    {
      name: "Cristi M",
      imageUrl: "/assets/members/Cristi M.webp"
    },
    {
      name: "Ticu Daria Teodora",
      imageUrl: "/assets/members/Daria Ticu.webp",
      quote: "Cerul este limita",
      instagram: "https://instagram.com/daria_ticu?igshid=ZDc4ODBmNjlmNQ==",
      facebook: "https://www.facebook.com/daria.ticu.7"
    },
    {
      name: "David Hîncu",
      imageUrl: "/assets/members/David Hincu.webp",
      quote: "Do the hard work, especially when you don't feel like it.",
      instagram: "https://www.instagram.com/da.eu.david/"
    },
    {
      name: "Alexandru Radu",
      imageUrl: "/assets/members/Alex Radu.webp",
      quote: "Born to be a SolidWorker",
      instagram: "https://www.instagram.com/alexandru230/",
      github: "https://github.com/alexradu04"
    },
    {
      name: "Puricoi Constantin-Cătălin",
      imageUrl: "/assets/members/David Hincu.webp",
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
      instagram: "https://www.instagram.com/catalinpuricoi/",
      facebook: "https://www.facebook.com/catalin.puricoi",
      github: "https://github.com/catalinpuricoi15"
    },
    {
      name: "Balasescu Andrei",
      imageUrl: "/assets/members/ab.webp",
      quote: "We win these",
      instagram: "https://www.instagram.com/bala_andrei9/"
    }
  ]
}
