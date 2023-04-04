import { loadHome } from '../pages/home.js';
import { loadMenu } from '../pages/menu.js';
import { loadContact } from '../pages/contact.js';

const pages = {
  home: { name: 'Home', load: loadHome },
  menu: { name: 'Menu', load: loadMenu },
  contact: { name: 'Contact', load: loadContact },
};

export function createNav() {
  const nav = document.createElement('nav');

  const navList = document.createElement('ul');
  nav.appendChild(navList);

  for (let page in pages) {
    navList.appendChild(createNavButtons(page));
  }

  return nav;
}

function createNavButtons(page) {
  const listItem = document.createElement('li');
  const button = document.createElement('button');
  listItem.appendChild(button);
  button.classList.add('nav-btn');

  button.textContent = pages[page].name;
  button.addEventListener('click', () => {
    pages[page].load();
  });

  return listItem;
}
