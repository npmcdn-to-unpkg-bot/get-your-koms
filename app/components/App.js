import React from 'react';

require('../main.css');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

export default App;
