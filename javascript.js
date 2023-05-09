function getWeather() {
    const apiKey = 'YOUR_API_KEY_HERE';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const conditions = data.weather[0].description;
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `Temperature: ${temperature}°C<br>Conditions: ${conditions}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  