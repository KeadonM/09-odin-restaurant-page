import { loadHome } from '../pages/home.js';
import { createNav } from './nav.js';

const app = document.querySelector('#app');

function createHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('div');
  header.appendChild(logo);
  logo.id = 'logo';
  logo.textContent = `Old Dough Pizzeria`;

  const nav = createNav();
  header.appendChild(nav);

  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  const credit = document.createElement('div');
  footer.appendChild(credit);
  credit.classList.add('credit');
  credit.innerHTML = `
  <a id="copyright" href="https://github.com/keadonm" target="_blank">
    Copyright ©
      <script>
        document.write(new Date().getFullYear());
      </script>
    KeadonM
    <i class="fab fa-github"></i>
  </a>`;

  return footer;
}

export function load() {
  app.appendChild(createHeader());
  app.appendChild(createMain());
  app.appendChild(createFooter());

  loadHome();
}
