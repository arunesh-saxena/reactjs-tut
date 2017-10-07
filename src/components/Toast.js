import * as React from 'react';

const Toast = ({ toast, hideToast }) => (
  // <div className='row'>
  <div className={`col-md-12 toast ${toast.className}`}>
    <div className='row'>
      <div className="message col-md-11">{`${toast.text} - ${toast.timestamp}`}</div>
      <div className='col-md-1 clearfix'>
        <button type="button" onClick={hideToast} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

  </div>
  // </div>
);



export default Toast;