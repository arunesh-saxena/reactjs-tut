export function setNameUserAction(name) {
    return {type: 'SET_NAME', payload: `${name} appending in action`}
}
export function setAge(age) {
    return {type: 'SET_AGE', payload: age}
}
export const login = (data) => {
    return {type: 'LOGIN', data: data}
};
export const logout = (data) => {
    return {type: 'LOGOUT'}
};
