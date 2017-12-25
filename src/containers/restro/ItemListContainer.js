import React, {Component} from 'react';
// import {connect} from 'react-redux';

import './itemListContainer.css';

import {ItemList} from '../../components/restro/ItemList';
import OrderReviewContainer from './OrderReviewContainer';


class ItemListContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    items = [
        {   
            id:1,
            itemName: 'Samosa',
            description: `A samosa is a fried or baked dish with a savoury filling, such as spiced potatoe's,
                        onions, peas, lentils, macaroni, noodles, cheese, minced lamb or minced beef.
                        Pine nuts can also be added. Its size and consistency may vary, but typically it
                        is distinctly triangular or tetrahedral in shape.`,
            imageURL: 'samosa.jpg',
            price: 17,
            unit:'piece',
            currency:'&#x20B9'
        },
        {
            id:2,
            itemName: 'Jalebi',
            description: `Jalebi, also known as zulbia, is a sweet popular in countries of South Asia, West Asia, North Africa, and East Africa. It is made by deep-frying maida flour (plain flour or all-purpose flour) batter in pretzel or circular shapes, which are then soaked in sugar syrup. They are particularly popular in Iran and the Indian subcontinent`,
            imageURL: 'jalebi.jpg',
            price: 57,
            unit:'kg',
            currency:'&#x20B9;'
        },
        {
            id:3,
            itemName: 'Masala Chai',
            description: `Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices, and herbs`,
            imageURL: 'masala_chai.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        {
            id:3,
            itemName: 'Masala Chai',
            description: `Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices, and herbs`,
            imageURL: 'masala_chai.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        {
            id:3,
            itemName: 'Masala Chai',
            description: `Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices, and herbs`,
            imageURL: 'masala_chai.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        
        {
            id:3,
            itemName: 'Masala Chai',
            description: `Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices, and herbs`,
            imageURL: 'masala_chai.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        
        {
            id:3,
            itemName: 'Masala Chai',
            description: `Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices, and herbs`,
            imageURL: 'masala_chai.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        }
    ];
    render() {
        return (
            <div className='item-list-container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <ItemList items={this.items}/>
                    </div>
                    <div className='col-md-4'>
                        <OrderReviewContainer  isSubmitBtn='true'/>
                    </div>
                </div>
            </div>
        );
    };
}

export default ItemListContainer;