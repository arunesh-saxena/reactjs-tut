import * as React from 'react';
import Toast from './Toast';


const Toasts = ({ toasts, hideToast }) => {
  console.log(toasts);
  let toastslist = toasts.toasts.map((toast, index) =>{
     return ( <Toast key={ toast.timestamp } toast={ toast } hideToast={ () => hideToast(toast) }/>);
    })
    
      
  return (
    <div className="toast-container col-md-12">
      { toastslist}
    </div>
  );
}

export default Toasts;