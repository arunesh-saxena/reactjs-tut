
import  _ from 'lodash';

const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';



// const showToast = (text, className) => ({
//   type: SHOW_TOAST,
//   toast: {
//     timestamp: Date.now(),
//     text,
//     className
//   }
// });

// export const hideToast = (toast) => ({
//   type: HIDE_TOAST,
//   toast
// });

const showToast = (text, className) => ({
  type: SHOW_TOAST,
  toast: {
    timestamp: Date.now(),
    text: text,
    className: `${className}`
  }
});

export const hideToast = (toast) => ({
  type: HIDE_TOAST,
  toast: toast
});

const defaultSetting = { msg: 'Default msg', autoHide: true };
export const showSuccessToast = (data) => (dispatch, getState) => {
  _.clone(data,defaultSetting);
  const toastAction = showToast(data.msg, 'success alert alert-success');
  dispatch(toastAction);
  if (data.autoHide === undefined || data.autoHide) {
    setTimeout(() => {
      dispatch(hideToast(toastAction.toast));
    }, 3500);

  }
};

// export const showSuccessToast = function (text) {
//   return (dispatch) => {
//     const toastAction = showToast(text, 'success');
//     dispatch(showToast(text, 'success'));
//     setTimeout(() => {
//       dispatch(hideToast(toastAction.toast))
//     }, 3500);
//   }
// };



export const showErrorToast = (data) => (dispatch, getState) => {
  _.clone(data,defaultSetting)
  const toastAction = showToast(data.msg, 'error alert alert-danger');
  dispatch(toastAction);
  if (data.autoHide === undefined || data.autoHide) {
    setTimeout(() => {
      dispatch(hideToast(toastAction.toast));
    }, 3500);
  }

};
