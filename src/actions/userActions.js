export const login = (data) => {
    return {type: 'LOGIN', data: data}
};
export const logout = (data) => {
    return {type: 'LOGOUT'}
};
export const setUserStatus = (data) => {
    return {type: 'SET_USER_STATUS', data: data}
};
