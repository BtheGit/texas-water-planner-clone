import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imgTexasWhite from '../images/texas-white.png';
import WaterText from '../components/WaterText';
import { Helmet } from 'react-helmet';

const Home = props => (
  <main className="home--container">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="home--inner">
      <header className="home--tab">
        <h1>
          <WaterText
            textColor='#FFF'
            waterColor="turquoise"
          >
            Texas Water Explorer
          </WaterText>
        </h1>
        <p>The Texas Water Explorer presents information about Texas' freshwater resources in six categories: Water Quantity, Water Quality, Ecosystem Health, Economic Productivity, Water Governance, and Water Conservation.</p>
        <Link to="/map">
          <img 
            className="home--image__texas" 
            src={imgTexasWhite} 
            alt="Texas Water Explorer" 
          />
        </Link>
        <p>Explore our interactive maps or read about our key findings across the state and in your area.</p>
        <div>
          <sub>Privacy Policy</sub>
          <sub>Terms of Use</sub>
        </div>
      </header>
      <div className="home--tab">
        <Link to="/about">
          <h2>About the Explorer</h2>
          <p>Read about the Texas Water Explorer project</p>
        </Link>
      </div>
      <div className="home--tab">
        <Link to="/texas-water-basics">
          <h2>Texas Water Basics</h2>
          <p>Learn about Texas water agencies and terminology</p>
        </Link>
      </div>
      <div className="home--tab">
        <Link to="/">
          <h2>Water Explorer Category Summaries</h2>
          <p>Read summaries of our six water indicator categories</p>
        </Link>
      </div>
      <div className="home--tab">
        <Link to="/">
          <h2>Your Local Water</h2>
          <p>See Explorer highlights from your local river basin and aquifer</p>
        </Link>
      </div>
    </div>
  </main>
)

export default Home;