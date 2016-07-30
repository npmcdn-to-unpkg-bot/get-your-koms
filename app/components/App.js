import React from 'react';
require('../main.css');

const divStyle = {
  padding: 0,
  margin: 0,
};

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row full-row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

export default App;
