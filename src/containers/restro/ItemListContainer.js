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
            imageURL:'img/samosa.jpg',
            price: 17,
            unit:'piece',
            currency:'&#x20B9'
        },
        {
            id:2,
            itemName: 'Jalebi',
            description: `Jalebi, also known as zulbia, is a sweet popular in countries of South Asia, West Asia, North Africa, and East Africa. It is made by deep-frying maida flour (plain flour or all-purpose flour) batter in pretzel or circular shapes, which are then soaked in sugar syrup. They are particularly popular in Iran and the Indian subcontinent`,
            imageURL:'img/jalebi.jpg',
            price: 57,
            unit:'kg',
            currency:'&#x20B9;'
        },
        {
            id:3,
            itemName: 'Chaat',
            description: `Chaat  is a savory snack, typically served as a hors d'oeuvre at road-side tracks from stalls or food carts in India, Pakistan, Nepal and Bangladesh. With its origins in Uttar Pradesh,chaat has become immensely popular in the rest of South Asia.`,
            imageURL:'img/chaat.JPG',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        {
            id:4,
            itemName: 'Gajar Halwa',
            description: `Gajar ka halwa also known as gajrela or gajorer halwa, is a carrot-based sweet dessert pudding from the Indian subcontinent. It is made by placing grated carrot in a pot containing a specific amount of water, milk and sugar and then cooking while stirring regularly.`,
            imageURL:'img/gajar-ka-halwa.jpg',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        {
            id:5,
            itemName: 'Puri sabji',
            description: `Puri Sabji (sometimes spelled poori bhaji) is a South Asian dish of puri (deep-fried rounds of flour) and aloo (potato) bhaji (a spiced potato dish which may be dry or curried). It is a traditional breakfast dish in North India.`,
            imageURL:'img/puri_sabji.jpg',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },        
        {
            id:6,
            itemName: 'Pakodi',
            description: `Pakodi is a fried snack (fritter). Originally from the Indian subcontinent, it is a popular snack across the Indian subcontinent, especially in Pakistan, India, Bangladesh and Nepal`,
            imageURL:'img/pakodi.jpg',
            price: 21,
            unit:'cup',
            currency:'&#x20B9'
        },
        
        {
            id:7,
            itemName: 'Rajma Chawal',
            description: `Rajma is a popular South Asian vegetarian dish originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices and usually served with rice.`,
            imageURL:'img/rajma-chawali.jpg',
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
                        <OrderReviewContainer  isSubmitBtn='true' {...this.props}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default ItemListContainer;