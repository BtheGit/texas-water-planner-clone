import React from 'react';

class MapView extends React.Component {
  render() {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Texas Rivers" 
        src="https://www.arcgis.com/apps/View/index.html?appid=e25b2f84e605423f98f55ba710d26f4f">
      </iframe>
    )
  }
}

export default MapView;
