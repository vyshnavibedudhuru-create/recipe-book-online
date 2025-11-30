const recipes = [
  {
    id: 1,
    name: "Chicken Biryani",
    img: "https://images.unsplash.com/photo-1603898037225-1dfc78b0a02c",
    ingredients: ["Chicken", "Rice", "Spices", "Onions", "Mint", "Ginger Garlic"],
    instructions: "Cook chicken with spices. Add parboiled rice. Layer and cook on dum for 20 mins."
  },
  {
    id: 2,
    name: "Veg Fried Rice",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    ingredients: ["Rice", "Carrot", "Beans", "Capsicum", "Soy Sauce", "Oil"],
    instructions: "Stir-fry vegetables, add cooked rice and sauces. Mix and serve hot."
  },
  {
    id: 3,
    name: "Masala Dosa",
    img: "https://images.unsplash.com/photo-1617191518509-83dc1c7c0e54",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Turmeric", "Oil"],
    instructions: "Make dosa, prepare potato masala, stuff and roll."
  }
];

// Load recipes
const container = document.getElementById("recipeContainer");

function displayRecipes(list) {
  container.innerHTML = "";
  list.forEach(r => {
    container.innerHTML += `
      <div class="recipe-card">
        <img src="${r.img}">
        <h3>${r.name}</h3>
        <button onclick="openPopup(${r.id})">View Recipe</button>
      </div>
    `;
  });
}

displayRecipes(recipes);

// Popup
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

function openPopup(id) {
  const recipe = recipes.find(r => r.id === id);
  document.getElementById("popupTitle").innerText = recipe.name;
  document.getElementById("popupImage").src = recipe.img;

  const ingredientsList = document.getElementById("popupIngredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(i => {
    ingredientsList.innerHTML += `<li>${i}</li>`;
  });

  document.getElementById("popupInstructions").innerText = recipe.instructions;

  popup.classList.remove("hidden");
}

closeBtn.onclick = () => popup.classList.add("hidden");

popup.onclick = (e) => {
  if (e.target === popup) popup.classList.add("hidden");
};

// Search function
document.getElementById("searchBox").addEventListener("input", function () {
  const text = this.value.toLowerCase();
  let filtered = recipes.filter(r => r.name.toLowerCase().includes(text));
  displayRecipes(filtered);
});
