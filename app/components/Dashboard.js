import React from 'react';

const divStyle = {
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class Dashboard extends React.Component{
  render() {
    return (
      <div >
        <div className="row" id="dashAnchor" style={divStyle}>
          <h3 className="text-xs-center">Dashboard that has some buttons</h3>
        </div>
        <div className="row" id="mapAnchor">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dashboard;
