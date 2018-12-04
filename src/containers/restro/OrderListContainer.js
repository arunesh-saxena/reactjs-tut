import React, {Component} from 'react';
import {connect} from 'react-redux';

import './menuContainer.css';

import {Header} from '../../components/restro/Header';
import {OrderReviewList} from '../../components/restro/OrderReviewList';
import {CONSTANTS} from '../../constants';

import {setOrderDetail} from '../../actions/restroActions';

class OrderListContainer extends Component {
    constructor(props) {
        super();
    }
    componentWillMount() {
        fetch(CONSTANTS.api.restro.orderList).then(res => res.json()).then((res) => {
            if (res.success) {
                console.log(res.data);
                this.setOrderDetail(res.data);
            }
        }).catch(error => {
            console.error(error);
        });
        this.orderList =  this.props.restro.orderList;
    }
    orderList = [];
    
    setOrderDetail(data) {
        this
            .props
            .setOrderDetail(data);
        // this.setState({orderDetail: this.props.state.render.orderDetail})
    }

    render = () => {
        return (
            <div>
                <div className="container">
                    <Header title='Order List'/>
                    <div className='body-padding-top'>
                        <OrderReviewList isReadOnly='true'
                        orderList={this.props.restro.orderList} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({
    setOrderDetail: (data) => {
        dispatch(setOrderDetail(data))
    }
   
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
