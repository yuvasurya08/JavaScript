// Use the countries array to display all the countries. 
const countries = ['Afghanistan','Bangladesh', 'Barbados', 'Belarus', 'Belgium','Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'India'];

const countriesList = document.getElementById('countries-list');

// Loop through the countries array and create list items for each country
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    countriesList.appendChild(li);
});

//See the design

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_countries_aray_day_2.2.png