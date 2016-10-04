var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather app built on React.</p>
      <p>
        Some of the tools I used;
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/React">react</a> - the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - where the data came from.
        </li>
        <li>
          <a href="https://heroku.com">Heroku</a> - where the app is hosted.
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
