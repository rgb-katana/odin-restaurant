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
