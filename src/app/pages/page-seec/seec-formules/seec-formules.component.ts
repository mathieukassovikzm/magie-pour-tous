import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seec-formules',
  templateUrl: './seec-formules.component.html',
})
export class SeecFormulesComponent implements OnInit {
  public formules = [
    {
      name: 'OneHour',
      title: "1 heure d'animation",
      lstTxt: [
        "1 heure de séance d'activité physique et sportive avec les enfants",
      ],
    },
    {
      name: 'Formation',
      title: "Une formation de l'enseignant",
      lstTxt: ["La formation de l'institutrice ou de l'intitueur"],
    },
    {
      name: 'Suivi',
      title: 'Un suivi',
      lstTxt: ['Un dossier complet, fiches séances du cycle de travail'],
    },
    {
      name: 'Adaptation',
      title: 'Séances adaptées',
      lstTxt: ['Intervention possible sur les cycles 1, 2 et 3'],
    },
    {
      name: 'Materiel',
      title: 'Matériel inclus',
      lstTxt: ["Du matériel mis à disposition par l'éducateur."],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
