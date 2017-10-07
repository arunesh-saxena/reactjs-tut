import React from 'react';
import { connect } from 'react-redux';
import { showSuccessToast, showErrorToast, hideToast } from '../actions/toastActions';


import Toasts from '../components/Toasts';



const mapStateToProps = (state) => {
  return (
    {
      toasts: state.toast
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    hideToast: (toast) => dispatch(hideToast(toast))
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toasts);

