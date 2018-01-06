import React from 'react';
// import {connect} from 'react-redux';
import {
    Route,
  } from "react-router-dom";

import MenuContainer from './MenuContainer';
import MenuUploadContainer from './MenuUploadContainer';
import OrderStatusContainer from './OrderStatusContainer';

import {Header} from '../../components/restro/Header';

class RestroContainer extends React.Component {
    constructor(props) {
        super();
    }
    resetOrder(){
        
    }
    render() {
        return (
            <div>
                <div className="container">
                    {/* <Header title='Your Order Status'/> */}
                    {/* <div className='body-padding-top'>                         */}
                        <Route exact path="/restro/" component ={MenuContainer}/>
                        <Route path="/restro/menu/upload/" component ={MenuUploadContainer}/>
                        <Route path="/restro/menu/" component ={MenuContainer}/>
                        <Route path="/restro/order/review/" render={() => <div>this is cutomer window page</div>}/>
                        <Route path="/restro/order/status/:id" component={OrderStatusContainer}/>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}


export default RestroContainer;