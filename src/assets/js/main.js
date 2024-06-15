document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    let drink = document.querySelector('input').value;
    console.log(`Fetching details for drink: ${drink}`); 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log('Response data:', data); 

            if (data.drinks) {
                let drinkData = data.drinks[0];
                console.log('Drink data')
                
                // Set drink name and image
                document.getElementById('drink-name').innerText = drinkData.strDrink;
                document.getElementById('drink-img').src = drinkData.strDrinkThumb;

                // Collect ingredients
                let ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    let ingredient = drinkData[`strIngredient${i}`];
                    if (ingredient) {
                        ingredients.push(ingredient);
                    } else {
                        break;
                    }
                }
                console.log('Ingredients:', ingredients); 

                // Map ingredients to list items and join them into a single string
                let ingredientsList = ingredients.map(ingredient => `<li class="list-group-item">${ingredient}</li>`).join('');
                console.log('Ingredients List HTML:', ingredientsList); 

                // Check if the ul element exists
                let ingredient = document.getElementById('ingredients-list');
                if (ingredient) {
                    // Set the innerHTML of the ul element to the ingredients list
                    ingredient.innerHTML = ingredientsList;
                    console.log('Updated ul element:', ingredient); 
                } else {
                    console.error('ul element not found'); 
                }

                // Set instructions
                document.getElementById('drink-instructions').innerText = drinkData.strInstructions;
            } else {
                // Clear fields if no drink is found
                document.getElementById('drink-name').innerText = "No drink found";
                document.getElementById('drink-img').src = "";
                document.getElementById('ingredients-list').innerHTML = "";
                document.getElementById('drink-instructions').innerText = "";
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`); // Debug log
        });
}
