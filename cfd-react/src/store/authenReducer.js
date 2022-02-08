import {
    useState
} from "react";
import {
    LOGIN
} from "../constant/api";

const token = JSON.parse(localStorage.getItem('token') || null)
const statusLogin = localStorage.getItem('statusLogin')


const initialState = {
    login: !!token,
    statusLogin: statusLogin || false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action)
            // xu ly du lieu trong payload
            const token = action.payload;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('statusLogin', true);

            // update state
            return {
                login: !!token,
                    statusLogin: true
            }
            case 'LOGOUT':
                localStorage.removeItem('token');
                localStorage.removeItem('statusLogin');
                return {
                    login: false,
                        user: null,
                        statusLogin: false
                }
    }
    return state
}

export default authReducer