const SET_MENULIST = 'SET_MENULIST';
const SET_ORDER = 'SET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

const DEFAULT_STATE = {
    menuList: [],
    orderList: []
};

// cont isItemInOrderList = (item) => {
//     return state.some((v)=>{
//         return v.id === item.id;
//     });
// };
const restroReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_MENULIST:
            state= {
                ...state,
                menuList: action.data
            }
            break;
        case SET_ORDER:
            if(action.data.qnty === 0){
                state = {
                    ...state,
                    orderList: state.orderList.filter((v)=>v.id !== action.data.id)
                }
            }else{
                state = {
                    ...state,
                    orderList: [
                        ...state.orderList,
                        action.data
                    ]
                }
            }
           
            break;
        case UPDATE_ORDER:
        // let isExist =  state.some((v)=>{
        //                 return v.id === item.id;
        //             });
            state= {
                ...state,
                orderList: [
                    action.data
                ]
            }
            break;
        default:
            return state;
    }

    return state

};

export default restroReducers;
