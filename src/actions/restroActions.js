const SET_MENULIST = 'SET_MENULIST';
const SET_ORDER = 'SET_ORDER';

export const setMenuList = (data) => {
    return {type: SET_MENULIST, data: data}
};

export const setOrder = (data) => {
    return {type: SET_ORDER, data: data}
};