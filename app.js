const searchFoods = () => {
    const searchInput = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('Please write your meal name in the search box.'));
}

const displayMeals = meals => {
    const mealNamesDiv = document.getElementById('meal-containers');
    mealNamesDiv.innerHTML = '';
    meals.forEach(meals => {
        const individualMealDivs = document.createElement('div');
        individualMealDivs.className = 'individual-divs';
        individualMealDivs.innerHTML = `
        <div onclick="getMealId('${meals.idMeal}')">
            <img src="${meals.strMealThumb}">
            <p id="meal-names">${meals.strMeal}</p>
        </div>`
        mealNamesDiv.appendChild(individualMealDivs);
    });
}

const getMealId = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data.meals[0]))
        .catch(error => displayError('Something seems to be a problem. Please come back later.'));
}

const displayInfo = ingredients => {
    const infoContainer = document.getElementById('info-container');
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.className = 'info-box';
    infoContainerDiv.innerHTML = `
    <img src="${ingredients.strMealThumb}">
    <h3>${ingredients.strMeal}</h3>
    <h5>Ingredients</h5>
    <ul>
        <li>${ingredients.strIngredient1}</li>
        <li>${ingredients.strIngredient2}</li>
        <li>${ingredients.strIngredient3}</li>
        <li>${ingredients.strIngredient4}</li>
        <li>${ingredients.strIngredient5}</li>
        <li>${ingredients.strIngredient6}</li>
        <li>${ingredients.strIngredient7}</li>
        <li>${ingredients.strIngredient8}</li>
        <li>${ingredients.strIngredient9}</li>
        <li>${ingredients.strIngredient10}</li>
    </ul>`
    infoContainer.appendChild(infoContainerDiv);
}

const displayError = error => {
    const errorElement = document.getElementById('error-message');
    errorElement.innerText = error;
}