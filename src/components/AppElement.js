import React from 'react';
const AppBtn = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={{ width: props.custWidth }}
                className={` ${(props.custPrimary) ? 'btn-primary' : ''} btn ${props.custClass}`}
            >
                {props.children}
            </button>
        </div >
    );
}

export default AppBtn;

export const Toast = ({ toast, hideToast }: ToastProps) => (
 <div className={ `toast ${toast.className}` }>
   <div className="message">{ toast.text }</div>
   <div onClick={ hideToast } className="close">x</div>
 </div>
);