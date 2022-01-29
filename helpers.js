const destination = document.getElementById("destination")
const weather1 = document.getElementById("weather1")
const sports = document.getElementById("sports");
const venues = document.getElementById("venues");

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  const weatherContent = `
    <h2>Tarih</h2>
		<h2>Temperature: ${currentDay.current.temperature}&deg;C</h2>
		<h2>Condition: ${currentDay.current.weather_descriptions[0]}</h2>
    <img src="${currentDay.current.weather_icons[0]}">`;
  weather1.innerHTML = weatherContent
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);


const createSportsHTML = (sportNews) => {
  let arr = sportNews.articles
  console.log(sportNews);
  console.log(arr);
  arr.forEach((item, index) => {
    sports.innerHTML +=  `
    <div class="col-4 d-flex flex-column justify-content-between">
      <div class="news " id="news${index}">
        <h2>${item.title !==null ? item.title :item.description.slice(0,100) }</h2> </div>
      <div class="news-body d-flex flex-column justify-content-between" > 
        <img class="sportimage" style="width:100%;height:170px;object-fit: cover;" src="${item.urlToImage}"/>
        <p>${item.description.slice(0,170)} <br> <a href="${item.url}" target="_blank">Read more...</a></p>
        <p>Source:${item.source.name !== null ? item.source.name:item.author }</p>
        <p>Author:${item.author !== null ? item.author:item.source.name }</p>
      </div>
    </div>    
        `;
   
  });

}

const createVenuesHTML = (data) => {
  console.log(data);

  destination.innerHTML = `<h2>${data[0].venue.location.city}</h2>`
  data.forEach((item, index) => {
    const venueIcon = item.venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    console.log(venueImgSrc);
    const venueContent = `
    <div class="venue col-2" id="venue${index}">
      <h2>${item.venue.name}</h2>
      <img class="venueimage" src="${venueImgSrc}"/>
      <h3>Address:</h3>
      <p>${item.venue.location.address}</p>
      <p>${item.venue.location.city}</p>
      <p>${item.venue.location.country}</p>
    </div>`;
    venues.innerHTML += venueContent;
  });
}
