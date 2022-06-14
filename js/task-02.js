const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const neWingredients = ingredients.map(ingredient => {
  const ingridientList = document.querySelector('#ingredients');
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  // console.log(ingredientItem);
  ingridientList.append(ingredientItem);
  // console.log(ingredientItem);
});


// const neWingredients = ingredients.map(ingredient => {
  
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add('item');
//   // console.log(ingredientItem);
//   const ingridientList = document.querySelector('#ingredients').append(ingredientItem);
//   // console.log(ingredientItem);
// });