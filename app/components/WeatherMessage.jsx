var React = require('react');
var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3>Weather Message
      </h3>
      <p>temp in {location} is {temp}</p>
    </div>
  )
};

module.exports = WeatherMessage;
