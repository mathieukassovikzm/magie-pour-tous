import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { ISpectacleModel } from 'src/app/models/spectacle';

@Component({
  selector: 'app-page-desc-spectacle',
  templateUrl: './page-desc-spectacle.component.html',
  styleUrls: ['./page-desc-spectacle.component.scss'],
})
export class PageDescSpectacleComponent implements OnInit {
  public spectacleClosUp: ISpectacleModel = {
    title: 'Clos-Up',
    videoId: 'zYLcCo28-fM',
    tabTxt: [
      "De table en table et/ou au cocktail dînatoire, c'est à 20 cm de vos yeux que la magie prend forme.",
      'Avec cordes, cigarettes, pièces, foulards, cartes et vos portefeuilles, le magicien anime avec talent et élégance vos invités à travers une magie interactive.',
      'En petit comité ou en public nombreux le magicien déambule lors de votre soirée et propose des expériences surprenantes qui dynamiseront votre événement.',
      'Un véritable spectacle au bout des doigts, le close up : une valeur sûre !',
      '* Convivialité entre les invités',
      '* Prestation adaptée au rythme de la soirée',
      '* Intervention non intrusive et fédératrice',
      "* Possibilité d'adapter des numéros sur mesure selon les convives de la table",
      '* Vous êtes une entreprise: la magie est un véritable outil de communication',
    ],
    visible: true,
  };

  public spectacleCabaret: ISpectacleModel = {
    title: 'Cabaret',
    videoId: 'WaHn1s9alUc',
    tabTxt: [
      "Lors de votre repas, l'artiste magicien réalise différentes  interventions (entre les plats) de 10 à 30 minutes sur scène. Avec beaucoup d'humour, de finesse et de légèreté, l'artiste fait participer les invités et propose des numéros hors du commun.",
      "Numéros en musique, mentalisme, manipulation d'objets, télépathie, une expérience surprenante à travers laquelle vous pourriez bien vous retrouver intimement liés à la magie.",
      "Cette formule peut se combiner en complément d'un close up pour clore votre soirée.",
      '* Tous les invités profitent de 3 passages de 10 à 30 min de magie',
      '* Les invités participent et sont impliqués',
      "* L'artiste s'adresse à l'ensemble de l'assistance",
      "* Les passages s'adaptent au style et au rythme de la soirée",
      "* Des numéros sur mesure peuvent être créés pour l'événement",
      'FORMULES SUR MESURE',
      'Conception et  réalisation de projets sur mesure.',
      'Vous voulez intégrer de la magie dans votre événement, notre équipe vous accompagne dans votre démarche.',
      'Produit marketing, performance, salon , exposition, saynètes théâtralisées, stand événementiel, festival thématique,…',
      "Notre plaisir sera d'apporter nos connaissances et  notre réseau professionnel au service de votre création.",
      'Un accompagnement individualisé dans votre mise en place de projets, conseil et suivi avant, pendant et après votre projet.',
    ],
    visible: true,
  };

  public spectacleMagieNum: ISpectacleModel = {
    title: 'Magie Numérique et Close-up digital',
    videoId: 'xpwda7_BXOs',
    tabTxt: [
      "La Magie digitale, une animation originale et innovante pour faire voyager vos événements dans l'ère du temps.",
      "Un divertissement fascinant à travers les outils modernes de la technologie High Tech et les objets connectés. Le closeup digital vous offre un nouveau regard sur la Magie : un monde ou le réel et le virtuel ne font qu'un.",
      'Seul votre imagination donnera des limites à cette Magie des temps modernes.',
      "Un slogan, la devise de votre entreprise, un produit qui sort d'une tablette… c'est à quelques centimètres des yeux de vos clients ou partenaires que les miracles prennent forme.",
      "Pour divertir ou communiquer (votre lancement de produit, l'inauguration de vos locaux, un séminaire professionnel thématique…)",
      'En petit comité ou en public nombreux le magicien déambule lors de votre soirée et propose des expériences surprenantes qui dynamiseront votre événement (cocktails ou repas).',
      'La magie numérique, une animation futuriste dans le présent !',
    ],
    visible: true,
  };

  public spectacleJeunePublic: ISpectacleModel = {
    title: 'Magie Numérique et Close-up digital',
    tabTxt: [
      'A CHACUN SON TOUR',
      "Il était une fois un magicien issu d'une grande famille de magiciens… ",
      "Ce mage étrange et parfois décalé, vous propose une rencontre pleine d'humour et de bizarreries dans un monde où tout est possible surtout l'impossible.",
      'Tata la sorcière, Samy le lapin excentrique et Aldo le serpent chevelu vous feront partager leurs aventures les plus loufoques.',
      "Rêves et amusements, sorcellerie et poésie, imaginaire et réalité seront les ingrédients de ce voyage au coeur de l'extraordinaire.",
      'Une expérience hors du commun au cours de laquelle vous pourriez bien vous retrouver intimement liés à la magie !!! ',
      "Un cocktail détonant de magie, d'humour et de surprises.",
    ],
    visible: true,
  };

  public spectacleGrandesIllu: ISpectacleModel = {
    title: 'Show Grandes Illusions',
    tabTxt: [
      'Spectacle de Magie Complet (1h45)',
      "Grandes illusions, numéro d'oiseaux, mentalisme, artistes internationaux…",
      'Nos Prestations sont clef en main (technique comprise)',
      "N'hésitez pas à nous contacter pour plus d'infos.",
    ],
    visible: true,
  };
  public spectacle = this.spectacleCabaret;

  constructor(private router: Router) {}

  ngOnInit() {
    let url = this.router.url;
    const currentRoute = url.replace(
      `/${LstPagesMap.get(Pages.SPECTACLES)!.route}/`,
      ''
    );

    switch (currentRoute) {
      case LstPagesMap.get(Pages.SPECCLOSUP)!.route:
        this.spectacle = this.spectacleClosUp;
        break;
      case LstPagesMap.get(Pages.SPECCABARET)!.route:
        this.spectacle = this.spectacleCabaret;
        break;
      case LstPagesMap.get(Pages.SPECMAGIENUM)!.route:
        this.spectacle = this.spectacleMagieNum;
        break;
      case LstPagesMap.get(Pages.SPECENFANTS)!.route:
        this.spectacle = this.spectacleJeunePublic;
        break;
      case LstPagesMap.get(Pages.SPECGRANDESILLU)!.route:
        this.spectacle = this.spectacleGrandesIllu;
        break;
      default:
        this.spectacle = this.spectacleClosUp;
        break;
    }
  }
}
