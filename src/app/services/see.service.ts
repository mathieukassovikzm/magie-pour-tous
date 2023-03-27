import { Injectable } from '@angular/core';
import { IActivityModel } from '../models/activity';
import { IStickerModel } from '../models/sticker';
import { ITrustModel } from '../models/partner';
import { IPageNavModel } from '../models/pageNav';

@Injectable({
  providedIn: 'root',
})
export class SeeService {
  public listTitle: IPageNavModel[] = [
    {
      name: 'Bienfaits',
      title: 'Les bienfaits',
      link: 'bienfaits',
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
  ];
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
        { name: "Course d'orientation", url: 'course-d-orientation' },
        { name: 'Vélo', url: 'velo' },
      ],
    },
  ];
  public seeListBienfaits: IStickerModel[] = [
    {
      name: 'BienEtre',
      title: 'Bien être au travail',
      lstTxt: [
        'Diminue le stress et la fatigue',
        "Augmente l'espérance de vie de 3 ans",
        "Retarde de 6 ans l'âge de dépendance",
      ],
    },
    {
      name: 'Productivite',
      title: 'Augmentation de la productivité',
      lstTxt: [
        'Augmente la productivité de 6 à 9%',
        "Diminue l'absentéisme de 30 à 40%",
        'Réduit de 40% les accidents du travail',
      ],
    },
    {
      name: 'Rentabilite',
      title: '4 à 14% net de Rentabilité',
      lstTxt: [
        "Le sport en entreprise à un impact direct sur l'augmentation de la rentabilité",
      ],
    },
    {
      name: 'Entreprise',
      title: "Pour l'entreprise",
      lstTxt: [
        'Réduit de 40% les accidents du travail',
        "Diminue l'absentéisme de 30 à 40%",
      ],
    },
    {
      name: 'Financier',
      title: 'Un gain financier',
      lstTxt: [
        "Pour l'employé Economise 30 à 34 euros sur le budget de santé",
        "Pour la société civile c'est 308 à 348€ d'économie sur les dépenses de santé par personne / an",
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
