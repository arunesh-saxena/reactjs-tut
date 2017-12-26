const SET_MENULIST = 'SET_MENULIST';
const SET_ORDER = 'SET_ORDER';

const DEFAULT_STATE = {
    menuList: [],
    orederList: []
};

const restroReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_MENULIST:
            return {
                ...state,
                menuList: action.data
            }
        case SET_ORDER:
            return {
                ...state,
                orederList: [
                    ...state.orederList,
                    action.order
                ]
            }
        default:
            return state;
    }

};

export default restroReducers;
