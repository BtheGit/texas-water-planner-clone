import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './About.css';
import Collapsible from '../components/Collapsible';

const About = props => {
  return (
    <main className="about-container scroll-container">
      <Helmet>
        <title>About the Water Explorer</title>
      </Helmet>

      <h1>The Texas Water Explorer</h1>
      <p>The Nature Conservancy created the Texas Water Explorer to summarize the current state of Texas’ surface and groundwater and to provide a resource to policy-makers, water managers, scientists and the general public. By increasing access to Texas’ water data and centralizing the scientific interpretation of trends and observations, we hope to help improve water management strategies, aid policymakers, engage a conservation constituency, and provide an important tool for water managers as they make decisions.</p>
      <p>The Texas Water Explorer incorporates numerous state, national and academic datasets commonly utilized by water managers throughout Texas. This website summarizes and maps important information to help you understand Texas water without asserting any causal links to Texas’ freshwater challenges.</p>
      <p>We structure the Explorer around six important aspects of Texas water sustainability and synthesize them using more than twenty indicator metrics:</p>
      <Collapsible
        trigger="Water Quantity"
      >
        <p>Explore trends and patterns in Texas surface and groundwater supply and water use, aquifer conditions and river flows.</p>      
        <h4><Link to="/">Read Summary of Water Quantity</Link></h4>
        <div className="dropdown-row">
          <Link to="/">Modeled River Flow Alteration</Link>
          <Link to="/">Explore Maps</Link>
        </div>
        <div className="dropdown-row">
          <Link to="/">Water Use by Sector: Historic, Current, Future</Link>
          <Link to="/">Explore Maps</Link>
        </div>
        <div className="dropdown-row">
          <Link to="/">Reservoir Storage</Link>
          <Link to="/">Explore Maps</Link>
        </div>
      </Collapsible>
      <Collapsible
        trigger="Water Quality"
      >
        <p>Explore trends and patterns in Texas surface and groundwater supply and water use, aquifer conditions and river flows.</p>      
        <h4><Link to="/">Read Summary of Water Quantity</Link></h4>
        <div className="dropdown-row">
          <Link to="/">Modeled River Flow Alteration</Link>
          <Link to="/">Explore Maps</Link>
        </div>
        <div className="dropdown-row">
          <Link to="/">Water Use by Sector: Historic, Current, Future</Link>
          <Link to="/">Explore Maps</Link>
        </div>
        <div className="dropdown-row">
          <Link to="/">Reservoir Storage</Link>
          <Link to="/">Explore Maps</Link>
        </div>    
        </Collapsible>
        <Collapsible
        trigger="Ecosystem Health"
        >
          <p>Explore trends and patterns in Texas surface and groundwater supply and water use, aquifer conditions and river flows.</p>      
          <h4><Link to="/">Read Summary of Water Quantity</Link></h4>
          <div className="dropdown-row">
            <Link to="/">Modeled River Flow Alteration</Link>
            <Link to="/">Explore Maps</Link>
          </div>
          <div className="dropdown-row">
            <Link to="/">Water Use by Sector: Historic, Current, Future</Link>
            <Link to="/">Explore Maps</Link>
          </div>
          <div className="dropdown-row">
            <Link to="/">Reservoir Storage</Link>
            <Link to="/">Explore Maps</Link>
          </div>    
      </Collapsible>
      <Collapsible
        trigger="Ecosystem Productivity"
      >
      
      </Collapsible>
      <Collapsible
        trigger="Water Governance"
      >
      
      </Collapsible>
      <Collapsible
        trigger="Water Conservation"
      >
      
      </Collapsible>
    </main>
  )
}

export default About;