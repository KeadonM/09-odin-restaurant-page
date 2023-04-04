function createHome() {
  const homeContainer = document.createElement('div');

  const demo = document.createElement('div');
  homeContainer.appendChild(demo);
  demo.textContent = 'Home';

  return homeContainer;
}

export function loadHome() {
  const main = document.querySelector('#main');
  const content = createHome();
  console.log(main);

  main.innerHTML = '';
  main.appendChild(content);
}
