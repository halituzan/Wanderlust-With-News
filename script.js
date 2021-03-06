// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');
const container = document.querySelector(".container")

// Foursquare API Info
const clientId = 'FOURSQUARE_CLIENT_ID';
const clientSecret = 'FOURSQUARE_CLIENT_SECRET';
const url = 'https://api.foursquare.com/v2/venues/explore?near='
//// WEATHER API Info
const weatherApi = 'WEATHER_API'
const weatherUrl = 'http://api.weatherstack.com/current?access_key='

//// news api info

const newsKey = "NEWS_KEY";
const newsApi = "https://newsapi.org/v2/everything?q="




// Add AJAX functions here:
let city = "";
const getVenues = async () => {


    const urlToFetch = `${url}${city}&limit=6&client_id=${clientId}&client_secret=${clientSecret}&v=20220128`

    //console.log(urlToFetch);
    try {
        let response = await fetch(urlToFetch);
        if (response.ok) {
            let jsonResponse = await response.json();
            //console.log(jsonResponse);
            let venues = jsonResponse.response.groups[0].items
            // console.log(venues);
            return venues
        }
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch = `${weatherUrl + weatherApi}&query=${city}`
    // console.log(urlToFetch);
    try {
        let response = await fetch(urlToFetch);
        if (response.ok) {
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            // let venues = jsonResponse.response.groups[0].items
            // console.log(venues);
            return jsonResponse
        }

    } catch (error) {
        console.log(error);
    }

}

const getNews = async () => {
    const urlToFetch = `${newsApi + city}&from=2022-01-28&sortBy=publishedAt&apiKey=${newsKey}`
    console.log(urlToFetch);
    // console.log(urlToFetch);
    try {
        let response = await fetch(urlToFetch);
        if (response.ok) {
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse
        }

    } catch (error) {
        console.log(error);
    }


}

submitBtn.onclick = () => {
    city = inputField.value
    container.style.visibility = "visible"


    getForecast().then(res => createWeatherHTML(res))
    getVenues().then(res => createVenuesHTML(res))
    getNews().then(res => createSportsHTML(res))

}





// Execute function
