import React from 'react';
import ModalBase from './ModalBase';
import './Modal_Summary.css';

const Modal_Summary = props => (
 <ModalBase className="modal-summary">
    <h2>What category of water information would you like to learn about?</h2>
    <ul>
      <li>Water Quantity</li>
      <li>Water Quality</li>
      <li>Ecosystem Health</li>
      <li>Ecosystem Productivity</li>
      <li>Water Governance</li>
      <li>Water Conservation</li>
    </ul>
 </ModalBase> 
)

export default Modal_Summary;