import React, { PropTypes } from 'react';
import '../main.css';

const divStyle = {
  paddingLeft: 0,
  paddingRight: 0,
}

const App = (props) => {
  return (
    <div>
      <div className="container-fluid" style={divStyle}>
        <div className="row full-row">
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};


export default App;
