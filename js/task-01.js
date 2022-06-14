const category = document.querySelector('#categories');
console.log('Number of categories:', category.children.length);

const categoryItem = [...category.children];
// console.log(categoryItem);
categoryItem.forEach(element => {
    console.log('Category:', element.children[0].textContent);
    console.log('Elements:', element.children[1].children.length);
});
