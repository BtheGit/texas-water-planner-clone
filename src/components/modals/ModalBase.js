import React from 'react';
import { connect } from 'react-redux';
import * as mapDispatchToProps from '../../actions/modalActions';
import './ModalBase.css';

const ModalBase = ({className, children, hideModal}) => {
  return(
    <div 
      className={className ? className + " modal" : "modal"} 
      onClick={e => e.stopPropagation()}
    >
      <div className="modal--close" onClick={hideModal}>×</div>
      {children}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(ModalBase);