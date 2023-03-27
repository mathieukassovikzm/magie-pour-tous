import { Injectable } from '@angular/core';
import { IActivityModel } from '../models/activity';
import { IStickerModel } from '../models/sticker';
import { ITrustModel } from '../models/partner';

@Injectable({
  providedIn: 'root',
})
export class SeeService {
  public seeListActivities: IActivityModel[] = [
    {
      title: 'Fitness',
      url: 'see-fitness',
      sports: [
        { name: 'Fitness', url: 'fitness' },
        { name: 'Pilate', url: 'pilate' },
        { name: 'Step', url: 'step' },
        { name: 'Cardio-training', url: 'cardio-training' },
        { name: 'Gym douce', url: 'gym-douce' },
      ],
    },
    {
      title: 'Combat',
      url: 'see-combat',
      sports: [
        { name: 'Boxe Française', url: 'boxe-francaise' },
        { name: 'Judo', url: 'judo' },
        { name: 'Gouren', url: 'gouren' },
        { name: 'Lutte', url: 'lutte' },
      ],
    },
    {
      title: 'Sports collectifs',
      url: 'see-sports-co',
      sports: [
        { name: 'Football', url: 'football' },
        { name: 'Handball', url: 'handball' },
        { name: 'Basketball', url: 'basketball' },
        { name: 'Volleyball', url: 'volleyball' },
        { name: 'Rugby', url: 'rugby' },
        { name: 'Ultimate', url: 'ultimate' },
      ],
    },
    {
      title: 'Sports Raquettes',
      url: 'see-sports-raquettes',
      sports: [
        { name: 'Badminton', url: 'badminton' },
        { name: 'Tennis de Table', url: 'tennis-de-table' },
        { name: 'Tennis', url: 'tennis' },
      ],
    },
    {
      title: 'Sports plein air',
      url: 'see-sports-plein-air',
      sports: [
        { name: 'Course à pied', url: 'course-a-pied' },
        { name: 'Course d’orientation', url: 'course-d-orientation' },
        { name: 'Vélo', url: 'velo' },
      ],
    },
  ];
  public seeListFormules: IStickerModel[] = [
    {
      name: 'OneHour',
      title: '1 heure de séance',
      lstTxt: ["1 heure de séance d'activité physique et sportive"],
    },
    {
      name: 'Materiel',
      title: 'Matériel inclus',
      lstTxt: ["Du matériel mis à disposition par l'éducateur."],
    },
    {
      name: 'Deplacement',
      title: 'Nous venons à vous',
      lstTxt: [
        "Le déplacement de l'éducateur, qui vient animer la séance dans votre entreprise.",
      ],
    },
    {
      name: 'Water',
      title: "N'oubliez pas de vous hydrater",
      lstTxt: ["Mise à disposition d'une bouteille d'eau de 50cl."],
    },
  ];
  public seeListPartner: ITrustModel[] = [
    {
      name: 'France Boissons',
      logo: 'companies_france-boissons.png',
    },
    {
      name: 'Sevel Services',
      logo: 'companies_sevel-services.png',
    },
    {
      name: 'Domitis Concarneau',
      logo: 'companies_domitys.png',
    },
    {
      name: 'Clikéco Finistère',
      logo: 'companies_clik-eco.png',
    },
    {
      name: 'Outdoor Indoor',
      logo: 'companies_outdoor-indoor.png',
    },
    {
      name: 'Gras Savoye',
      logo: 'companies_gras-savoye.png',
    },
    {
      name: 'Bee Electronique',
      logo: 'companies_bee-electronique.png',
    },
  ];

  constructor() {}
}
