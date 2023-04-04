function createContact() {
  const contactContainer = document.createElement('div');

  const demo = document.createElement('div');
  contactContainer.appendChild(demo);
  demo.textContent = 'Contact';

  return contactContainer;
}

export function loadContact() {
  const main = document.querySelector('#main');
  const content = createContact();

  main.innerHTML = '';
  main.appendChild(content);
}
