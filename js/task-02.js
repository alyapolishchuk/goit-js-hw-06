const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const neWingredients = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  // console.log(ingredientItem);
  return ingredientItem;
  // console.log(ingredientItem);
});

const ingridientList = document.querySelector('#ingredients');
ingridientList.append(...neWingredients);

// const neWingredients = ingredients.map(ingredient => {
  
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item');
//   // console.log(ingredientItem);
//   const ingridientList = document.querySelector('#ingredients').append(ingredientItem);
//   // console.log(ingredientItem);
// });