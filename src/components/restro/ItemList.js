import React from 'react';
import "./itemList.css";
import {MenuItem} from './MenuItem';

export const ItemList = (props) => {
    const items = props
        .items
        .map((item, index) => {
            return <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center">
                <MenuItem item={item}/>
            </li>
        });
    return (
        <div>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    );
};