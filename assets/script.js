
//unique API key
const APIKey = "02410c6019a515031add5849bb5eece6";

    var getConditions = (event) => {
         // Obtain city name from the search box
    let city = $('#search-city').val();
    currentCity = $('#search-city').val();
    //get request from open weather api
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}" + city + "&appid=" + APIKey;
    // Fetch from API
    fetch(queryURL)
        .then((response) => {
            // Save city to local storage
        saveCity(city);
        // Create icon for the current weather using Open Weather Maps
        let currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        
// HTML for the results of search
let currentWeatherHTML = `
<h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<img src="${currentWeatherIcon}"></h3>
<ul class="list-unstyled">
    <li>Temperature: ${response.main.temp}&#x2103;</li>
    <li>Humidity: ${response.main.humidity}%</li>
    <li>Wind Speed: ${response.wind.speed} m/s</li>
</ul>`;

// Append the results to the DOM
$('#current-weather').html(currentWeatherHTML);
})
}
// Function to obtain the five day forecast and display to HTML
var getFiveDayForecast = (event) => {
    let city = $('#search-city').val();
    
    // Set up URL for API search using forecast search
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&APPID=" + APIKey;
       
}

getConditions();