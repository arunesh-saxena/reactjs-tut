const SET_MENULIST = 'SET_MENULIST',
    SET_ORDER = 'SET_ORDER',
    UPDATE_ORDER_DETAIL = 'UPDATE_ORDER_DETAIL',
    SET_ORDER_DETAIL = 'SET_ORDERDETAIL';

export const setMenuList = (data) => {
    return {type: SET_MENULIST, data: data}
};

export const setOrder = (data, action) => {
    return {type: SET_ORDER, data: data, action: action}
};

export const setOrderDetail = (data) => {
    return {type: SET_ORDER_DETAIL, data: data}
};
export const updateOrder = (data) => {
    return {type: UPDATE_ORDER_DETAIL, orderId: data.orderId, status: data.status}
};