import {
  animate,
  query,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const mediaMax600 = trigger('list-itens', [
  transition(':enter', [
    query('li', [
      style({ background: 'yellow', transform: 'translateY(100px)' }),
      // stagger('700ms', [animate('1s')]),
      //
      // group([
      //     animate(
      //       '1s',
      //       style({
      //         background: 'red',
      //       })
      //     ),
      //     animate(
      //       '2s',
      //       style({
      //         background: 'blue',
      //       })
      //     ),
      //     animate(
      //       '7s',
      //       style({
      //         background: 'none',
      //         transform: 'translateY(0)',
      //       })
      //     ),
      //   ]),
      // ]),
      sequence([
        animate(
          '1s',
          style({
            background: 'red',
          })
        ),
        animate(
          '2s',
          style({
            background: 'blue',
          })
        ),
        animate(
          '7s',
          style({
            background: 'none',
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
    transition('* => *', [
      query(':leave', [
        style({
          background: 'red',
        }),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ]),
]);

export const mediaMax700 = trigger('list-itens', [
  transition(':enter', [
    query('li', [
      style({ background: 'red', transform: 'translateY(100px)' }),
      // stagger('700ms', [animate('1s')]),
      //
      // group([
      //     animate(
      //       '1s',
      //       style({
      //         background: 'red',
      //       })
      //     ),
      //     animate(
      //       '2s',
      //       style({
      //         background: 'blue',
      //       })
      //     ),
      //     animate(
      //       '7s',
      //       style({
      //         background: 'none',
      //         transform: 'translateY(0)',
      //       })
      //     ),
      //   ]),
      // ]),
      sequence([
        animate(
          '1s',
          style({
            background: 'red',
          })
        ),
        animate(
          '2s',
          style({
            background: 'blue',
          })
        ),
        animate(
          '7s',
          style({
            background: 'none',
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
    transition('* => *', [
      query(':leave', [
        style({
          background: 'red',
        }),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ]),
]);

export const listItensAnimation = () => {
  if (isMatchMedia(600)) {
    return mediaMax600;
  }

  if (isMatchMedia(700)) {
    return mediaMax700;
  }

  return;
};

const isMatchMedia = (value: number) => {
  return matchMedia(`(max-width: ${value}px)`).matches;
};
