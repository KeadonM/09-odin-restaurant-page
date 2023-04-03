import './reset.css';
import './style.css';

import { createHeader } from './header.js';

const app = document.querySelector('#app');

app.appendChild(createHeader());
