document.addEventListener("DOMContentLoaded", () => {
  const GetWeather = document.querySelector(".getWeather");
  const LocationName = document.querySelector(".locationName");
  const Temperature = document.querySelector(".temperature");
  const Description = document.querySelector(".description");
  const Location = document.querySelector(".location");
  let SearchHistory = JSON.parse(localStorage.getItem("SearchHistory")) || [];
  GetWeather.addEventListener("click", async () => {
    const location = Location.value.trim();
    const apiKey = "f7a704dc638114e9f6daecd434ffeddd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Location not found");
      }
      const data = await response.json();
      const locationName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      LocationName.innerText = locationName;
      Temperature.innerText = `Temperature: ${temperature}°C`;
      Description.innerText = `Weather: ${description}`;
      SearchHistory.push(location);
      localStorage.setItem("searchHistory", JSON.stringify(SearchHistory));
      console.log("Search History:", SearchHistory);
    } catch (error) {
      LocationName.innerText = "Error";
      Temperature.innerText = "";
      Description.innerText = error.message;
    }
  });
});
