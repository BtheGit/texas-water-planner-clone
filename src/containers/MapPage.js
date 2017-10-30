import React from 'react';
import './MapPage.css';
import { Helmet } from 'react-helmet';
import MapView from '../components/MapView';

class MapPage extends React.Component {
  render() {
    return (
      <main className="mappage-container">
        <Helmet>
          <title>Map Tool</title>
        </Helmet>
        <MapView />
      </main>
    )
  }
}

export default MapPage;