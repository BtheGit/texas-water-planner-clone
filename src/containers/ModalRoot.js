import React from 'react';
import { connect } from 'react-redux';
import MODALS from '../components/modals/';
import * as actions from '../actions/modalActions';
import './ModalRoot.css';

const ModalRoot = ({activeModal, hideModal}) => {
  if(!activeModal) {
    return null;
  }
  const ActiveModal = MODALS[activeModal];
  return (
    <div className="active-modal" onClick={hideModal}>
      <ActiveModal />
    </div>
  )
}

export default connect(state => state.modals, actions)(ModalRoot);