var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Some example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Glasgow'>Glasgow</Link>
          </li>
          <li>
            <Link to='/?location=Inverness'>Inverness</Link>
          </li>
        </ol>
    </div>

  )
};


module.exports = Examples;
