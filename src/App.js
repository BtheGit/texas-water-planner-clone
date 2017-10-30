import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from './containers/Routes';
import Navbar from './containers/Navbar';
import ModalRoot from './containers/ModalRoot';
import './App.css';

const App = () => (
  [
    <Helmet key="aa"
      titleTemplate="Texas Water Explorer - %s"
      defaultTitle="Texas Water Explorer"
    >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Blue Raster" />
      <meta name="description" content="The Texas Water Explorer presents information about Texas' freshwater resources in six categories: Water Quantity, Water Quality, Ecosystem Health, Economic Productivity, Water Governance, and Water Conservation." />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta http-equiv="Cache-control" content="public" />
    </Helmet>,
    <Navbar key="bb" />,
    <div className="main-container"key="cc">
      <Routes />
    </div>,
    <ModalRoot key="dd" />
  ]
)

export default App;
