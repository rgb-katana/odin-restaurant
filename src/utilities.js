export function createEl(type, classList = [], textContent) {
  const el = document.createElement(type);
  if (classList.length !== 0) classList.map(cl => el.classList.add(cl));
  el.innerText = textContent;

  return el;
}

export function createImgEl(classList, src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  classList.map(cl => img.classList.add(cl));

  return img;
}

export const content = document.getElementById('content');
export const navBtn = document.querySelector('.navigation__button');
export const navToggle = document.getElementById('navi-toggle');

export const navHome = document.querySelector('.navigation__link--home');
export const navMenu = document.querySelector('.navigation__link--menu');
export const navContacts = document.querySelector(
  '.navigation__link--contacts'
);
