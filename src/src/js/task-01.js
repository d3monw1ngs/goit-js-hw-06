function countCategories() {
    const categoriesList = document.getElementById("categories");
    const categoryItems = categoriesList.querySelectorAll('li.item');

    console.log(`Number of Categories:` + categoryItems.length);

    categoryItems.forEach(function(categoryItem){
        const categoryHeader = categoryItem.querySelector(`h2`).innerText;
        const categoryElementCount = categoryItem.querySelectorAll(`li`).length;

        console.log(`Category: ` + categoryHeader)
        console.log(`Elements: ` + categoryElementCount);
    });
}

countCategories();