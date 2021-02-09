const searchFoods = () => {
    const searchInput = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealNamesDiv = document.getElementById('meal-containers');
    mealNamesDiv.innerHTML = '';
    meals.forEach(meals => {
        console.log(meals.strMealThumb);
        const individualMealDivs = document.createElement('div');
        individualMealDivs.className = 'individual-divs';
        individualMealDivs.innerHTML = `
        <div>
            <img src="${meals.strMealThumb}">
            <p id="meal-names">${meals.strMeal}</p>
        </div>`
        mealNamesDiv.appendChild(individualMealDivs);
        console.log(mealNamesDiv);
    });
}

