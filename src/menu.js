'use strict';

import { createEl, createImgEl, content } from './utilities';

export default function loadMenu() {
  const menu = createEl('div', ['menu'], '');
  menu.append(
    createEl('h1', ['menu__title', 'menu__title--restaurant'], 'MENU')
  );

  const menuDrinks = createEl('div', ['menu__part', 'menu__part--drinks'], '');
  menuDrinks.append(createEl('h2', ['menu__title'], 'Drinks:'));

  const menuItemCoffee = createEl('div', ['menu__item'], '');
  menuItemCoffee.append(createEl('h3', ['menu__name'], 'Damn fine coffee'));
  menuItemCoffee.append(
    createImgEl(['menu__img'], '../images/coffeecup.png', 'Damn Fine Coffee')
  );
  menuItemCoffee.append(createEl('h3', ['menu__price'], '$2.00'));
  menuItemCoffee.append(
    createEl('h3', ['menu__price', 'menu__price--extra'], '$1.00 Refills')
  );

  const menuItemMilkshake = createEl('div', ['menu__item'], '');
  menuItemMilkshake.append(createEl('h3', ['menu__name'], 'Milkshake'));
  menuItemMilkshake.append(
    createImgEl(['menu__img'], '../images/milkshake.png', 'Milkshake')
  );
  menuItemMilkshake.append(createEl('h3', ['menu__price'], '$4.00'));
  menuItemMilkshake.append(
    createEl('h3', ['menu__price', 'menu__price--extra'], 'No Refills')
  );

  menuDrinks.append(menuItemCoffee);
  menuDrinks.append(menuItemMilkshake);
  menu.append(menuDrinks);

  const menuDesserts = createEl(
    'div',
    ['menu__part', 'menu__part--desserts'],
    ''
  );
  menuDesserts.append(createEl('h2', ['menu__title'], 'Desserts:'));

  const menuItemPie = createEl('div', ['menu__item'], '');
  menuItemPie.append(createEl('h3', ['menu__name'], 'Cherry Pie'));
  menuItemPie.append(
    createImgEl(['menu__img'], '../images/pie.png', 'Cherry Pie')
  );
  menuItemPie.append(createEl('h3', ['menu__price'], '$5.00'));
  menuItemPie.append(
    createEl('h3', ['menu__price', 'menu__price--extra'], 'Slice')
  );

  const menuItemDoughnut = createEl('div', ['menu__item'], '');
  menuItemDoughnut.append(createEl('h3', ['menu__name'], 'Doughnut'));
  menuItemDoughnut.append(
    createImgEl(['menu__img'], '../images/doughnut.png', 'Doughnut')
  );
  menuItemDoughnut.append(createEl('h3', ['menu__price'], '$1.00'));

  menuDesserts.append(menuItemPie);
  menuDesserts.append(menuItemDoughnut);
  menu.append(menuDesserts);

  content.append(menu);
}
