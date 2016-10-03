var React = require('react');
var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <p className="text-center">temp in {location} is {temp}</p>
    </div>
  )
};

module.exports = WeatherMessage;
