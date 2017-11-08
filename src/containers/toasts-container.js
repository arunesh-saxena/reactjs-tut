import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  hideToast, showErrorToast, showSuccessToast } from '../actions/toastActions';

import ToastEx from '../components/ToastEx';

const mapStateToProps = (state) => {
  return (
    {
      toasts: state.toast
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      hideToast: (toast) => dispatch(hideToast(toast)),
      showSuccess: (data) => {
          dispatch(showSuccessToast(data))
      },
      showError: (data) => {
          dispatch(showErrorToast(data))
      }
  }
};

const ToastContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToastEx));
export default ToastContainer;

