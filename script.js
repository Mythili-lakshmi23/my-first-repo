const recipes = {
  breakfast: [
    {
      title: "Masala Dosa",
      ingredients: "Dosa batter, potatoes, onion, mustard seeds, turmeric, curry leaves",
      steps: "Prepare masala, spread dosa on pan, fill and roll. Serve hot with chutney."
    },
    {
      title: "Vegetable Upma",
      ingredients: "Rava, mustard seeds, curry leaves, mixed vegetables, green chili",
      steps: "Roast rava, cook veggies, add water, mix rava and stir until cooked."
    }
  ],
  lunch: [
    {
      title: "Dal Fry with Rice",
      ingredients: "Toor dal, onion, tomato, cumin, garlic, spices",
      steps: "Pressure cook dal, prepare tadka, mix and simmer. Serve with rice."
    },
    {
      title: "Vegetable Biryani",
      ingredients: "Basmati rice, vegetables, biryani masala, yogurt",
      steps: "Cook vegetables with spices, layer with rice, cook on low flame."
    }
  ],
  dinner: [
    {
      title: "Chapati with Paneer Curry",
      ingredients: "Wheat flour, paneer, tomato, onion, spices",
      steps: "Make soft chapatis, cook paneer with masala gravy. Serve hot."
    },
    {
      title: "Tomato Bath",
      ingredients: "Rice, tomato, mustard seeds, green chili, onion",
      steps: "Cook rice, make tomato masala, mix together. Serve with raita."
    }
  ]
};

function showRecipe(meal) {
  const recipeList = recipes[meal];
  const randomIndex = Math.floor(Math.random() * recipeList.length);
  const recipe = recipeList[randomIndex];

  document.getElementById('recipe-title').textContent = recipe.title;
  document.getElementById('ingredients').textContent = "Ingredients: " + recipe.ingredients;
  document.getElementById('steps').textContent = "Steps: " + recipe.steps;
}