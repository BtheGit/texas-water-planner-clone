import React from 'react';
import './MapPage.css';
import { Helmet } from 'react-helmet';

class MapPage extends React.Component {
  render() {
    return (
      <main className="mappage-container">
        <Helmet>
          <title>Map Tool</title>
        </Helmet>
        MAP
      </main>
    )
  }
}

export default MapPage;