const catigoriesList = document.querySelectorAll(".item");
console.log(`Number of categories:${catigoriesList.length}`);
const categoriesName = catigoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.querySelectorAll("li").length}`);
});