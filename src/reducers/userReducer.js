const initialState = {
    user:{
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
                user: {
                    username: action.data.username,
                    email: action.data.email,
                    id: action.data.id,
                },
                isLoggedIn: true
            }
            break;
        case "LOGOUT":
            state = {
                ...state,
                user: {
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
            user: {
                username: action.data.username,
                email: action.data.email,
                id: action.data.id,
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