const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients'); //возвращаем первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.

const markup = (item) => {
  const element = document.createElement('li'); 
  element.textContent = item;
  element.classList.add("item");
  return element;
} 
//вставит все <li> за одну операцию в список ul.ingredients:

const createMarkup = ingredients.map(markup);
ingredientsList.append(...createMarkup); 
console.log(ingredientsList);