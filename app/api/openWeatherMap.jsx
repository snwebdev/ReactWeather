var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5da2f4d934f1b6f44b293cf3a38c5cd4&units=imperial';
//5da2f4d934f1b6f44b293cf3a38c5cd4
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) { 
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    })
  }
}
