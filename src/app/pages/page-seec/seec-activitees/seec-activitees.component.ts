import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seec-activitees',
  templateUrl: './seec-activitees.component.html',
  styleUrls: ['./seec-activitees.component.scss'],
})
export class SeecActiviteesComponent implements OnInit {
  public activitees = [
    {
      title: 'Entex',
      url: 'seec-entex',
      sports: [
        { name: 'Gymnastique', url: 'fitness' },
        { name: 'Motricité', url: 'pilate' },
      ],
    },
    {
      title: 'Sports collectifs',
      url: 'seec-sports-co',
      sports: [
        { name: 'Football', url: 'football' },
        { name: 'Handball', url: 'handball' },
        { name: 'Basketball', url: 'basketball' },
        { name: 'Volleyball', url: 'volleyball' },
        { name: 'Rugby', url: 'rugby' },
        { name: 'Ultimate', url: 'ultimate' },
        { name: 'Tchoukball', url: 'tchoukball' },
      ],
    },
    {
      title: 'Combat',
      url: 'seec-combat',
      sports: [
        { name: 'Boxe Française', url: 'boxe-francaise' },
        { name: 'Lutte', url: 'lutte' },
      ],
    },

    {
      title: 'Sports Raquettes',
      url: 'seec-sports-raquettes',
      sports: [
        { name: 'Badminton', url: 'badminton' },
        { name: 'Tennis de Table', url: 'tennis-de-table' },
        { name: 'Tennis', url: 'tennis' },
      ],
    },
    {
      title: 'Sports plein air',
      url: 'seec-sports-plein-air',
      sports: [
        { name: "Course d'endurance", url: 'course-endurance' },
        { name: "Course d'orientation", url: 'course-d-orientation' },
        { name: 'Engins roulants', url: 'engin-roulants' },
        { name: 'Disque golf', url: 'disque-golf' },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
