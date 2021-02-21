import { trigger, transition, style, animate, group, query, stagger, state } from '@angular/animations';

export const FlyOutIn = trigger('flyOutIn', [
  transition('void => *', [
    style({ width: '100%', transform: 'translateY(700px)', opacity: 0 }),
    group([
      animate('0.6s 0.1s ease', style({ transform: 'translateX(0)', })),
      animate('0.6s ease', style({ opacity: 1 }))
    ])
  ])
])

// export const FlyInOut = trigger('flyInOut', [
//   state('in', style({
//     width: 120,
//     transform: 'translateX(0)', opacity: 1
//   })),
//   transition('void => *', [
//     style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
//     group([
//       animate('0.3s 0.1s ease', style({
//         transform: 'translateX(0)',
//         width: 120
//       })),
//       animate('0.3s ease', style({
//         opacity: 1
//       }))
//     ])
//   ]),
//   transition('* => void', [
//     group([
//       animate('0.3s ease', style({
//         transform: 'translateX(50px)',
//         width: 10
//       })),
//       animate('0.3s 0.2s ease', style({
//         opacity: 0
//       }))
//     ])
//   ])
// ])

export const ShrinkOut = trigger('shrinkOut', [
  state('in', style({ height: '*' })),
  transition('* => void', [
    style({ height: '*' }),
    animate(250, style({ height: 0 }))
  ])
])

export const PageAnimations = trigger('pageAnimations', [
  transition(':enter', [
    query('.container-fluid, form', [
      style({ opacity: 0, transform: 'translateX(-500px)' }),
      stagger(-30, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ])
])

export const FilterAnimation = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: '0px' }),
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
      ]),
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
      ]),
    ])
  ]),
])

export const ListStagger = trigger('listStagger', [
  transition('* <=> *', [
    query(':enter', [
      style({ transform: 'translateX(-45px)', opacity: 0 }),
      stagger('50ms', animate('400ms ease-out', style({ transform: 'translateX(0px)', opacity: 1 })))
    ], { optional: true }),
  ])
])

export const NoContent = trigger('noContent', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('1500ms', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
  ])
])
