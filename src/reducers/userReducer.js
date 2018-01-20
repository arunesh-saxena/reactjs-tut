const initialState = {
    userData:{
        username: null,
        email: null,
        id: null
    },
    isLoggedIn: false,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            state = {
                ...state,
                userData: {
                    username: action.data.userData.username,
                    email: action.data.userData.email,
                    id: action.data.userData.id,
                },
                isLoggedIn: true
            }
            break;
        case "LOGOUT":
            state = {
                ...state,
                userData: {
                    username: null,
                    email: null,
                    id: null
                },
                isLoggedIn: false
            }
            break;
        case "SET_USER_STATUS":
            state = {
                ...state,
                userData: {
                    username: action.data.userData.username,
                    email: action.data.userData.email,
                    id: action.data.userData.id,
                },
                isLoggedIn: action.data.status
            }
            break;
        default:
            return state;
    }

    return state;
}

export default userReducer;