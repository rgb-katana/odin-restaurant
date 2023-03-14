'use strict';

import './sass/main.scss';

import loadHome from './home';
import {
  content,
  navBtn,
  navToggle,
  navHome,
  navMenu,
  navContacts,
} from './utilities';
import loadMenu from './menu';
import loadContacts from './contacts';

loadHome();

navHome.addEventListener('click', function () {
  content.innerHTML = '';
  navToggle.checked = false;
  loadHome();
});

navMenu.addEventListener('click', function () {
  content.innerHTML = '';
  navToggle.checked = false;
  loadMenu();
});

navContacts.addEventListener('click', function () {
  content.innerHTML = '';
  navToggle.checked = false;
  loadContacts();
});
