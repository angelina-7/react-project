import * as api from './api.js'
import * as request from './requester.js'

export function login(email, password) {
    return request.post(api.LOGIN, { email, password })
        .then((user) => {
            if (user) {
                return user;
            } 
           
        });
}

export function register(email, password) {
    return request.post(api.REGISTER, { email, password })
        .then((user) => {
            if (user) {
                return user;
            } 
        })
}

export function logout() {
    return request.get(api.LOGOUT);
}

// function saveUser(data) {
//     let {email, _id, accessToken} = data;
//     localStorage.setItem('user', JSON.stringify({_id, email, accessToken}));
// }

export function getUser() {
    try {
        let user = localStorage.getItem('user');

        if (user) return JSON.parse(user);
    } catch (error) {
        return undefined;
    }


}