var React = require('react');

var Form = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h3>Form component</h3>
            <input type="text" ref="location"></input>
            <button>get weather</button>
        </form>
      </div>
    )
  }
});

module.exports = Form;
