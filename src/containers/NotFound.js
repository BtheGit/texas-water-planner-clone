import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { Helmet } from 'react-helmet';

const NotFound = props => (
  <div className="notfound-container">
    <Helmet>
      <title>404: Page Not Found</title>
    </Helmet>
    <div>404: Page Not Found</div>
  </div>
)

export default NotFound;