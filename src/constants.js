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
        }

    },
    getApi(term) {
        return `${this.baseAPIURL}${this.api['todoLiist']}`;
    },
    restro:{
        orderStatus:{
            'PENDING': 1,
            1: 'PENDING',
            'ACCEPTED': 2,
            2:'ACCEPTED',
            'PROCESSING': 3,
            3: 'PROCESSING',
            'COMPLETED': 4,
            4: 'COMPLETED',
            'DELIVERED': 5,
            5: 'DELIVERED'
        }
    }
}
