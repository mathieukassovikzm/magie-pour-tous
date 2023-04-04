import {
  animate,
  animation,
  query,
  sequence,
  stagger,
  style,
} from '@angular/animations';

export const SidebarOpenAnimation = animation([
  style({ right: '-{{menuWidth}}' }),
  query('.nav-item', [
    style({
      transform: 'translateX({{itemTranslate}})',
      opacity: 0,
    }),
  ]),
  sequence([
    animate('200ms', style({ right: '0' })),
    query('.nav-item', [
      stagger(50, [
        animate(
          '{{animationStyle}}',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ]),
]);

export const SidebarCloseAnimation = animation([
  style({ right: '0' }),
  query('.nav-item', [
    style({
      transform: 'translateX(0)',
      opacity: 1,
    }),
  ]),
  sequence([
    query('.nav-item', [
      stagger(-50, [
        animate(
          '{{animationStyle}}',
          style({
            transform: 'translateX({{itemTranslate}})',
            opacity: 0,
          })
        ),
      ]),
    ]),
    animate('200ms', style({ right: '-{{menuWidth}}' })),
  ]),
]);
