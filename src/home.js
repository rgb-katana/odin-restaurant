'use strict';

import { createEl, createImgEl, content } from './utilities';

export default function loadHome() {
  // Creating HOME itself
  const home = createEl('div', ['home'], '');

  home.append(createEl('h1', ['home__title', 'home__title--restaurant'], 'RR'));

  // Creating DESCRIPTION
  const description = createEl('div', ['home__description'], '');

  description.append(
    createEl('h2', ['home__title', 'home__title--h2'], 'About us:')
  );

  const figure = createEl('figure', ['home__figure'], '');

  figure.append(
    createImgEl(
      ['home__img', 'left-side'],
      './images/cooperRR.PNG',
      'Agent Cooper in RR'
    )
  );

  const rightSide = createEl('div', ['right-side'], '');

  const blockquoute = createEl('blockquote', ['home__blockquote'], '');
  blockquoute.append(
    createEl(
      'p',
      [],
      '"This diner, and its extraordinarily good coffee and pie, has become, I admit, something of an obsession for me."'
    )
  );

  rightSide.append(blockquoute);
  rightSide.append(
    createEl('figcaption', ['home__figcaption'], '—Dale Cooper, Twin Peaks')
  );

  figure.append(rightSide);

  description.append(figure);

  home.append(description);

  // CREATING HOURS

  const hours = createEl('div', ['home__hours'], '');
  hours.append(createEl('h2', ['home__title', 'home__title--h2'], 'Hours:'));
  const unorderedList = createEl('ul', ['home__list'], '');
  const openHours = [
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm',
    'Sunday: 8am - 8pm',
  ];
  openHours.map(openHour =>
    unorderedList.append(createEl('li', ['home__elem'], openHour))
  );
  hours.append(unorderedList);

  home.append(hours);

  // CREATING LOCATION
  const location = createEl('div', ['home__location'], '');
  location.append(
    createEl('h2', ['home__title', 'home__title--h2'], 'Location:')
  );
  location.append(
    createEl('p', [], 'At Main Street and Falls Avenue, Twin Peaks, Washington')
  );

  home.append(location);

  content.append(home);
}
