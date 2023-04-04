function createMenu() {
  const menuContainer = document.createElement('div');

  const demo = document.createElement('div');
  menuContainer.appendChild(demo);
  demo.textContent = 'Menu';

  return menuContainer;
}

export function loadMenu() {
  const main = document.querySelector('#main');
  const content = createMenu();

  main.innerHTML = '';
  main.appendChild(content);
}
