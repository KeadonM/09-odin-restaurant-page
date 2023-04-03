const pages = {
  home: 'Home',
  menu: 'Menu',
  contact: 'Contact Us',
};

export function createHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('div');
  header.appendChild(logo);
  logo.id = 'logo';
  logo.textContent = `Mitchin's Kitchen`;

  const nav = createNav();
  header.appendChild(nav);

  return header;
}

function createNav() {
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

  button.textContent = pages[page];
  button.addEventListener('click', () => {
    console.log(pages[page]);
  });

  return listItem;
}
