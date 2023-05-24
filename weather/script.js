function loc(){
    const API_KEY = 'ea7b9040a09d99a9ad07d1730e5d98cd'; // replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// function to fetch weather data for a given location
async function fetchWeatherData(city) {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

// example usage
fetchWeatherData(document.getElementById("input").value)
  .then(data => {
      document.getElementById("temp").innerHTML=data.main.temp+"° C"
      document.getElementById("humidity").innerHTML=data.main.humidity+" %"
      document.getElementById("wind").innerHTML=data.wind.speed+" KM/H"
      document.getElementById("container").style.height="550px"
    
  })
  .catch(error => {
    console.error(error);
  });

}