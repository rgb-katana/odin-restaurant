'use strict';

import { createEl, createImgEl, content } from './utilities';

export default function loadContacts() {
  const contacts = createEl('div', ['contacts'], '');
  contacts.append(
    createEl(
      'h1',
      ['contacts__title', 'contacts__title--restaurant'],
      'CONTACTS'
    )
  );

  const owner = createEl('div', ['contacts__owner'], '');
  owner.append(
    createImgEl(
      ['contacts__img', 'contacts__img--owner'],
      '../images/Norma.jpg',
      'Owner'
    )
  );

  const rightSide = createEl('div', ['right-side'], '');
  rightSide.append(createEl('h3', ['contacts__name'], 'Norma Jennings'));
  rightSide.append(createEl('h3', ['contacts__position'], 'Owner'));
  rightSide.append(createEl('h3', ['contacts__phone'], '555-555-5554'));
  rightSide.append(
    createEl('h3', ['contacts__email'], 'totallyRealEmail@notFake.com')
  );

  owner.append(rightSide);

  contacts.append(owner);

  const map = createEl('div', ['contacts__map'], '');
  map.append(createEl('h2', ['contacts__info'], 'Find us somewhere here:'));
  map.append(
    createImgEl(
      ['contacts__img', 'contacts__img--map'],
      '../images/twinpeaksmap.png',
      'Twin Peaks Map'
    )
  );

  contacts.append(map);

  content.append(contacts);
}
