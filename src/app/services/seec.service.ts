import { Injectable } from '@angular/core';
import { IActivityModel } from '../models/activity';
import { IStickerModel } from '../models/sticker';
import { ITrustModel } from '../models/partner';
import { IPageNavModel } from '../models/pageNav';

@Injectable({
  providedIn: 'root',
})
export class SeecService {
  public listTitle: IPageNavModel[] = [
    {
      name: 'Présentation',
      title: 'Présentation',
      link: 'presentation',
    },
    {
      name: 'Formules',
      title: 'Nos formules',
      link: 'formules',
    },
    {
      name: 'Activites',
      title: 'Les activités',
      link: 'activitees',
    },
    {
      name: 'Nos partenaires',
      title: 'Nos partenaires',
      link: 'trust',
    },
  ];
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
      logo: 'companies_ecole-privee-saint-joseph-pleyben.png',
      visible: true,
    },
    {
      name: 'Ecole publique Jules Verne',
      town: 'Plonevez-du-Faou',
      logo: 'companies_ecole-publique-jules-verne.png',
      visible: true,
    },
    {
      name: 'Ecole Maternelle Park Gwenn',
      town: "Pont-de-Buis lès Quimerc'h",
      logo: 'companies_ecole-maternelle-park-gwenn.png',
      visible: true,
    },
    {
      name: 'Ecole Maternelle Publique Per-Jackez Helias',
      town: 'Pleyben',
      logo: 'companies_ecole-maternelle-publique-per-jackezhelias.png',
      visible: true,
    },
    {
      name: 'Ecole privée Saint-Joseph',
      town: 'Edern',
      logo: 'companies_ecole-st-joseph-edern.png',
      visible: true,
    },
    {
      name: 'Ecole Publique',
      town: 'Lennon',
      logo: 'companies_ecole-publique-lennon.png',
      visible: true,
    },
    {
      name: 'Ecole Publique',
      town: 'Spezet',
      logo: 'companies_ecole-publique-spezet.png',
      visible: true,
    },
    {
      name: 'Ecole Publique Yves Ke Gall',
      town: 'Lannedern',
      logo: 'companies_ecole-publique-Yves-Le-Gall-Lannedern.png',
      visible: true,
    },
    {
      name: 'Ecole Privée Saint Augustin',
      town: 'Lannedern',
      logo: 'companies_ecole-privee-Saint-Augustin-Langolen.png',
      visible: true,
    },
    {
      name: 'Ecole Privée Sainte Anne Briec',
      town: 'Lannedern',
      logo: 'companies_ecole-privee-Sainte-Anne-Briec.png',
      visible: true,
    },
    {
      name: 'Ecole Publique Les Petites Abeilles',
      town: 'Saint Thois',
      logo: 'companies_ecole-publique-Des-petites-Abeilles-Saint-thois.png',
      visible: true,
    },
    {
      name: 'Ecole Publique Les Lutins',
      town: 'Cloitre Pleyben',
      logo: 'companies_ecole-publique-les-lutins-cloitre-pleyben.png',
      visible: true,
    },
  ];

  constructor() {}
}
