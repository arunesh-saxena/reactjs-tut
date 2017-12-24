import React from 'react';
// import "./Utility.css";

export const CurrencyInr = (props) => {
    return (
        <div>
            <span className="CurrencyInr">
                <span className='currency_symbol'>&#8377;</span>
                <span className='price'>
                    {props.item.price} 

                    {(props.item.unit)? ` / ${props.item.unit}` :''}
                </span>
            </span>

        </div>
    );
};