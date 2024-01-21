import React from 'react'

const AlertMessages = ({ type,message,onClose }) => {
    let choice = '';

    switch(type){
        case 'error':
            choice= 'alert-danger';
            break;
        case 'success':
            choice= 'alert-success';
            break;
        case 'warning':
            choice= 'alert-warning';
            break;
        default:
            choice= 'alert-primary';
    }
  return (
    <div className={`alert ${choice} alert-dismissible fade show`} role="alert">
        <button
          type="button"
          className="btn-close" 
          data-bs-dismiss="alert" 
          aria-label="Close"
          onclick={onClose}
        ></button>
    </div>
  );
};

export default AlertMessages;