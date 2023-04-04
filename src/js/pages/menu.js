const pizzaMenu = {
  classicPizzas: [
    {
      name: 'Margherita',
      ingredients:
        'Tomato sauce, fresh mozzarella, basil, and a drizzle of extra virgin olive oil',
    },
    {
      name: 'Pepperoni',
      ingredients: 'Tomato sauce, mozzarella, and premium pepperoni slices',
    },
    {
      name: 'Vegetarian',
      ingredients:
        'Tomato sauce, mozzarella, bell peppers, red onions, mushrooms, olives, and cherry tomatoes',
    },
    {
      name: 'BBQ Chicken',
      ingredients:
        'House-made BBQ sauce, mozzarella, grilled chicken, red onions, and fresh cilantro',
    },
    {
      name: 'Quattro Formaggi',
      ingredients:
        'Tomato sauce, mozzarella, gorgonzola, fontina, and parmesan cheeses',
    },
  ],
  signaturePizzas: [
    {
      name: 'Old Dough Special',
      ingredients:
        'Tomato sauce, mozzarella, Italian sausage, caramelized onions, roasted red peppers, and fresh basil',
    },
    {
      name: 'Mediterranean Delight',
      ingredients:
        'Olive oil base, mozzarella, feta cheese, sun-dried tomatoes, Kalamata olives, red onions, and fresh arugula',
    },
    {
      name: 'Spicy Diavola',
      ingredients:
        'Tomato sauce, mozzarella, spicy salami, chili flakes, and fresh oregano',
    },
    {
      name: 'Truffle Mushroom',
      ingredients:
        'Truffle oil base, mozzarella, fontina cheese, sautéed mushrooms, and fresh thyme',
    },
    {
      name: 'Prosciutto e Rucola',
      ingredients:
        'Tomato sauce, mozzarella, thinly sliced prosciutto, fresh arugula, and shaved parmesan',
    },
  ],
};

function createMenu() {
  const menuBG = document.createElement('div');
  menuBG.classList.add('container');
  menuBG.classList.add('menu-bg');

  const menuContainer = document.createElement('div');
  menuBG.appendChild(menuContainer);
  menuContainer.classList.add('menu-container');

  const heading = document.createElement('h1');
  menuContainer.appendChild(heading);
  heading.textContent = 'Our Menu';

  const classicPizzas = buildPizzasSection(
    pizzaMenu.classicPizzas,
    'Classic Pizzas'
  );
  menuContainer.appendChild(classicPizzas);

  const signaturePizzas = buildPizzasSection(
    pizzaMenu.signaturePizzas,
    'Signature Pizzas'
  );
  menuContainer.appendChild(signaturePizzas);

  return menuBG;
}

function buildPizzasSection(pizzas, type) {
  const pizzaListContainer = document.createElement('div');
  pizzaListContainer.classList.add('list-container');

  const heading = document.createElement('h2');
  pizzaListContainer.appendChild(heading);
  heading.textContent = type;

  const pizzaList = document.createElement('ul');
  pizzaListContainer.appendChild(pizzaList);
  pizzaList.classList.add('pizza-list');

  for (let pizza in pizzas) {
    pizzaList.appendChild(buildMenuItem(pizzas[pizza]));
  }

  return pizzaListContainer;
}

function buildMenuItem(pizza) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');

  const name = document.createElement('h3');
  menuItem.appendChild(name);
  name.textContent = pizza.name;

  const ingredients = document.createElement('p');
  menuItem.appendChild(ingredients);
  ingredients.textContent = pizza.ingredients;

  return menuItem;
}

export function loadMenu() {
  const main = document.querySelector('#main');
  const content = createMenu();

  main.innerHTML = '';
  main.appendChild(content);
}
