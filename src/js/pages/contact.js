function createContact() {
  const contactBG = document.createElement('div');
  contactBG.classList.add('container');
  contactBG.classList.add('contact-bg');

  const formContainer = document.createElement('form');
  contactBG.appendChild(formContainer);
  formContainer.classList.add('form-container');

  const heading = document.createElement('h2');
  formContainer.appendChild(heading);
  heading.textContent = 'Contact Us';

  const formGroup1 = document.createElement('div');
  formContainer.appendChild(formGroup1);
  formGroup1.classList.add('form-group');

  formGroup1.appendChild(buildInput('input', 'text', 'name'));
  formGroup1.appendChild(buildInput('input', 'text', 'subject'));

  const formGroup2 = document.createElement('div');
  formContainer.appendChild(formGroup2);
  formGroup2.classList.add('form-group');
  formGroup2.classList.add('columns');

  formGroup2.appendChild(buildInput('input', 'email', 'email'));

  const formGroup3 = document.createElement('div');
  formContainer.appendChild(formGroup3);
  formGroup3.classList.add('form-group');

  formGroup3.appendChild(buildInput('textarea', 'message', 'message'));

  const submitBtn = document.createElement('button');
  formContainer.appendChild(submitBtn);
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submit-btn');

  return contactBG;
}

function buildInput(field, type, name) {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  const label = document.createElement('label');
  inputContainer.appendChild(label);
  label.for = name;
  label.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  const input = document.createElement(field);
  inputContainer.appendChild(input);
  if (field === 'text') input.type = type;
  input.name = name;
  input.id = name;
  input.placeholder = name.charAt(0).toUpperCase() + name.slice(1);
  input.size = 1;

  return inputContainer;
}

export function loadContact() {
  const main = document.querySelector('#main');
  const content = createContact();

  main.innerHTML = '';
  main.appendChild(content);
}
