function createHome() {
  const homeBG = document.createElement('div');
  homeBG.classList.add('container');
  homeBG.classList.add('home-bg');

  const blurb = document.createElement('div');
  homeBG.appendChild(blurb);
  blurb.classList.add('blurb');

  const heading = document.createElement('h1');
  blurb.appendChild(heading);
  heading.classList.add('heading');
  heading.textContent = `Discover Timeless Flavor`;

  const paragraph = document.createElement('p');
  blurb.appendChild(paragraph);
  paragraph.textContent = `Welcome to Old Dough Pizzeria, where culinary art meets time-honored tradition! Nestled in the heart of our cozy neighborhood, we're proud to serve you the most delectable fermented dough pizzas, crafted with passion and patience. Our skilled pizzaiolos combine the finest locally-sourced ingredients with our secret family recipe, carefully fermenting the dough for an unmatched flavor experience. The result? A beautifully crisp crust, pillowy interior, and mouthwatering aroma that will transport you to the cobblestone streets of Italy. Join us at Old Dough Pizzeria and discover how our dedication to the ancient craft of dough fermentation creates a pizza experience like no other. Buon appetito!`;

  return homeBG;
}

export function loadHome() {
  const main = document.querySelector('#main');
  const content = createHome();

  main.innerHTML = '';
  main.appendChild(content);
}
