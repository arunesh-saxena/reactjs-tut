const initialState = {
	name: '------state from userReducer----',
    age: 27,
    user:{
        username: null,
        email: null,
        id: null
    },
    isLoggedIn:false,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
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
        default:
            return state;
    }

    return state;
}

export default userReducer;