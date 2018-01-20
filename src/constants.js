// import { Injectable } from '@angular/core';
//  @Injectable()

// export class appConfig {
//     CONSTANTS = {
//         key:'value'
//         key:'value'
//     }
// }
const baseAPIURL = 'http://localhost:3000/api';
export const CONSTANTS = {
    baseURL: 'http://localhost:3000',
    serviceUrl: '',
    msg: {
        ERROR: 'Error',
        INFO: 'Info',
        SUCCESS: 'Success',
        WARNING: 'Warning'
    },
    message: {
        internalServerError: 'Oops! Sorry, it looks like something went wrong and an error has occurred on server.'
    },
    templateUrls: {
        // Common
        header: 'common/components/header/header.tpl.html',
    },
    api: {
        todoList: `${baseAPIURL}/getTodolist`,
        addTodoList: `${baseAPIURL}/addTodo`,
        updateTodo: `${baseAPIURL}/updateTodo`,
        // deleteTodo:`${baseAPIURL}/deleteTodo/:id`
        deleteTodo: `${baseAPIURL}/deleteTodo/`,
        registerUser: `${baseAPIURL}/singup`,
        login: `${baseAPIURL}/login`,
        logout: `${baseAPIURL}/logout`,
        restro: {
            // itemList: './data/menuList.json', 
            itemList: `${baseAPIURL}/menu/list`,
            addMenu: `${baseAPIURL}/menu/add`,
            addOrder: `${baseAPIURL}/order/add/`,
            getOrder: `${baseAPIURL}/order/`,//`${baseAPIURL}/api/order/:id`
            updateOrder: `${baseAPIURL}/order/`//`${baseAPIURL}/api/order/:id`
        }

    },
    getApi(term) {
        return `${this.baseAPIURL}${this.api['todoLiist']}`;
    },
    restro:{
        orderStatus:{
            'PENDING': 1,
            1: 'Pending',
            'ACCEPTED': 2,
            2:'Accepted',
            'PROCESSING': 3,
            3: 'Processing',
            'COMPLETED': 4,
            4: 'Completed',
            'DELIVERED': 5,
            5: 'Delivered'
        },
        tableList: [
            {id:1,txt:'Table 1'}, 
            {id:2,txt:'Table 2'},
            {id:3,txt:'Table 3'},
            {id:4,txt:'Table 4'},
            {id:5,txt:'Table 5'}]
    }
}
