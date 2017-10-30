import React from 'react';
import { WebMap } from 'react-arcgis';

class MapView extends React.Component {
  render() {
    return (
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="Texas Rivers" 
        src="http://www.arcgis.com/apps/View/index.html?appid=e25b2f84e605423f98f55ba710d26f4f">
      </iframe>
    )
  }
}

export default MapView;

// <Map 
// <WebMap id="e25b2f84e605423f98f55ba710d26f4f"/>
// style={{ width: '100vw', height: '100vh' }}
// mapProperties={{ basemap: 'satellite' }}
// />