import { Injectable } from '@angular/core';
import { IActivityModel } from '../models/activity';
import { IStickerModel } from '../models/sticker';
import { ITrustModel } from '../models/partner';

@Injectable({
  providedIn: 'root',
})
export class SeecService {
  public seecListActivities: IActivityModel[] = [
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
  public seecListFormules: IStickerModel[] = [
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
  public seecListPartner: ITrustModel[] = [
    {
      name: 'Ecole Saint-Joseph',
      town: 'Pleyben',
      logo: 'companies_ecole-st-joseph-pleyben.png',
    },
    {
      name: 'Ecole publique Jules Verne',
      town: 'Plonevez-du-Faou',
      logo: 'companies_ecole-publique-jules-verne.png',
    },
    {
      name: 'Ecole Maternelle Park Gwenn',
      town: "Pont-de-Buis lès Quimerc'h",
      logo: 'companies_ecole-maternelle-park-gwenn.png',
    },
    {
      name: 'Ecole Maternelle Publique Per-Jackez Helias',
      town: 'Pleyben',
      logo: 'companies_ecole-maternelle-publique-per-jackezhelias.png',
    },
    {
      name: 'Ecole privée Saint-Joseph',
      town: 'Edern',
      logo: 'companies_ecole-st-joseph-edern.png',
    },
    {
      name: 'Ecole Publique',
      town: 'Lennon',
      logo: 'companies_ecole-publique-lennon.png',
    },
    {
      name: 'Ecole Publique',
      town: 'Spezet',
      logo: 'companies_ecole-publique-spezet.png',
    },
  ];

  constructor() {}
}
