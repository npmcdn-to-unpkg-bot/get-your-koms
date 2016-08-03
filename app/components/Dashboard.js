import React from 'react';
import Cards from './Cards';

const divStyle = {
  height: '125px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class Dashboard extends React.Component{
  render() {
    return (
      <div >
        <div className="row" id="dashAnchor" style={divStyle}>
          <Cards />
        </div>
        <div className="row" id="mapAnchor">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dashboard;
