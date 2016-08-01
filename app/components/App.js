import React from 'react';
require('../main.css');

class App extends React.Component{
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
  }
}

export default App;
