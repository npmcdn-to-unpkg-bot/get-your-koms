import React from 'react';

// Get Window Height and Calculate Map Div Height accordingly
function listenWindowResize() {
  window.addEventListener('resize', () => {
    const mapDiv = document.getElementById('map');
    mapDiv.style.height = (window.innerHeight - 80) + 'px';
    console.log(window.innerHeight);
  });
}

const divStyle = {
  // window height minus dashboard
  height: (window.innerHeight - 80) + 'px',
  backgroundColor: '#111',
};

class KOMs extends React.Component {
  componentDidMount() {
    // Execute on Resize
    listenWindowResize();
  }
  render() {
    return (
      <div id="map" ref="mapAnchor" style={divStyle} />
    );
  }
}

export default KOMs;
