const groceryItem = document.querySelector("input");
const addButton = document.querySelector("button");
const groceryList = document.querySelector("ul");

addButton.addEventListener("click", () => {
    let addGrocery = document.createElement("li");
    let deleteButton = document.createElement("button");
    
    addGrocery.textContent = groceryItem.value;
    deleteButton.textContent = "Delete";

    groceryList.appendChild(addGrocery);
    addGrocery.appendChild (deleteButton);
    
    groceryItem.value = "";

    deleteButton.addEventListener("click", () => {
        groceryList.removeChild (addGrocery);
    })
})



