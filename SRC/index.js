function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Recipe will appear here";
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
