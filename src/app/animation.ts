import {
  animate, query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const sliderAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', [
        style({ opacity: 0 })
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 })),
      ], { optional: true }),
      query(':enter', [
        animate('0.3s ease',
          style({ opacity: 1 })),
      ], { optional: true })
    ]),
    // transition('home => *, see => spp, see => seec, spp => seec, * => contact', slideTo('right')),
    // transition('contact => *, seec => spp, seec => see, spp => see, * => home', slideTo('left')),
  ]);

// trigger('routeAnimations', [
//   transition('* => *', [
//     query(':enter, :leave', [
//       style({ opacity: 0, position: 'absolute' })
//     ], { optional: true }),
//     query(':leave', [
//       style({ opacity: 1 }),
//       animate('0.5s', style({ opacity: 0, position: 'absolute' })),
//     ], { optional: true }),
//     query(':enter', [
//       animate('0.5s ease',
//         style({ opacity: 1, position: 'relative' })),
//     ], { optional: true })
//   ]),