const SET_MENULIST = 'SET_MENULIST',
    SET_ORDER = 'SET_ORDER',
    UPDATE_ORDER_DETAIL = 'UPDATE_ORDER_DETAIL',
    SET_ORDER_DETAIL = 'SET_ORDERDETAIL';

const DEFAULT_STATE = {
    menuList: [],
    orderList: [],
    orderDetail: []
};

const restroReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_MENULIST:
            state= {
                ...state,
                menuList: action.data
            }
            break;
            /* order list */
        case SET_ORDER:
            if(action.action === 'ADD'){
                let ind = state.orderList.findIndex((v) => v.id === action.data.id);
                const newState = {...state};
                newState.orderList[ind] = action.data;
                state = newState;
            }else if(action.action === 'REMOVE' || action.data.qnty === 0){
                state = {
                    ...state,
                    orderList: state.orderList.filter((v)=>v.id !== action.data.id)
                }
            }else if(action.action === 'RESET'){
                state = {
                    ...state,
                    orderList: []
                }
            }else {
                state = {
                    ...state,
                    orderList: [
                        ...state.orderList,
                        action.data
                    ]
                }
            }
            break;
            /* order details */
        case SET_ORDER_DETAIL:
            state = {
                ...state,
                orderDetail: [
                    action.data
                ]
            }
            break;
        case UPDATE_ORDER_DETAIL:
            let ind = state.orderDetail.findIndex((v) => v.id === action.orderId);
            const newState = {...state};
            newState.orderDetail[ind].status = action.status;
            state = newState;
            break;
        default:
            return state;
    }

    return state

};

export default restroReducers;
