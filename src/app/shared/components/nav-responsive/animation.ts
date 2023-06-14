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
  query(
    '.nav-item',
    [
      style({
        transform: 'translateX({{itemTranslate}})',
        opacity: 0,
      }),
    ],
    { optional: true }
  ),
  sequence([
    animate('200ms', style({ right: '0' })),
    query(
      '.nav-item',
      [
        stagger(50, [
          animate(
            '{{animationStyle}}',
            style({
              transform: 'translateX(0)',
              opacity: 1,
            })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const SidebarCloseAnimation = animation([
  style({ right: '0' }),
  query(
    '.nav-item',
    [
      style({
        transform: 'translateX(0)',
        opacity: 1,
      }),
    ],
    { optional: true }
  ),
  sequence([
    query(
      '.nav-item',
      [
        stagger(-50, [
          animate(
            '{{animationStyle}}',
            style({
              transform: 'translateX({{itemTranslate}})',
              opacity: 0,
            })
          ),
        ]),
      ],
      { optional: true }
    ),
    animate('200ms', style({ right: '-{{menuWidth}}' })),
  ]),
]);
