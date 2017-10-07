export function setName(name){
    return {
        type:'SET_NAME',
        payload: `${name} appending in action`
    }
}
export function setAge(age){
    return {
        type:'SET_AGE',
        payload: age
    }
}