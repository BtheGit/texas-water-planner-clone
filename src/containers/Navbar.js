import React from 'react';
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom';
import imgLogo from '../images/TNC-Logo-white-text.svg';
import imgTexasWhite from '../images/texas-white.png';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupActive: false,
      currentLocation: this.props.location.pathname
    }
  }

  onHamburgerClick = () => {
    this.setState({ isPopupActive: !this.state.isPopupActive })
  }

  componentWillReceiveProps() {
    if(this.props.location.pathname !== this.state.currentLocation) {
      this.setState({
        currentLocation: this.props.location.pathname,
        isPopupActive: false
      })
    }
    else {
      this.setState({currentLocation: this.props.location.pathname})
    }
  }

  render() {
    const popupState = this.state.isPopupActive ? 'popup-active' : '';
    const loc = this.props.location.pathname;
    return (
      <div className="navbar--container">
        <Link className="navbar--NC-logo" to="https://www.nature.org/ourinitiatives/regions/northamerica/unitedstates/texas/index.htm" >
          <img src={imgLogo} alt="The Nature Conservancy" />
        </Link>
        <div 
          className={`navbar--hamburger__container ${popupState}`}
          onClick={this.onHamburgerClick}
        >
          <div className="navbar--hamburger">
            <div className="navbar--hamburger__line"></div>
          </div>
        </div>
        <nav>
          <Link to="/" className={loc === '/' ? 'active' : ''}>Home</Link>
          <Link to="/map" className={loc === '/map' ? 'active navbar--item__map' : 'navbar--item__map'}>
            <img className="navbar--image__texas" src={imgTexasWhite} alt="Texas Water Explorer"/>
            <p>Map</p>
          </Link>
          <Link to="/about" className={loc === '/about' ? 'active' : ''}>About</Link>
          <Link to="/texas-water-basics" className={loc === '/texas-water-basics' ? 'active' : ''}>Basics</Link>
          <Link to="/contact" className={loc === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    )
  }
} 


export default withRouter(Navbar);