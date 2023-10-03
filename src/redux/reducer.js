import { prodata } from "./data";
import { additiondata } from "./data"
const INITIAL_STATE = {
    login: false,
    register: true,
    productdata: prodata,
    adddata: additiondata,
    activecart: false,
    cart: [],
    additioncart: [],
    search: false,
    productfiltered: [],
    additionfiltered: []

}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return { ...state, login: action.payload }

        case "SET_REGISTER":
            return { ...state, register: action.payload }
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.payload] }
        case "ADD_CARTA":
            return { ...state, additioncart: [...state.additioncart, action.payload] }
        case "ACTIVE_CART":
            return { ...state, activecart: action.payload }
        case "REMOVED_CART":
            return { ...state, cart: action.payload }
        case "REMOVED_ADDITION_CART":
            return { ...state, additioncart: action.payload }
        case "FILTER_PRODUCT":
            return { ...state, productfiltered: action.payload }
        case "FILTER_ADDITION":
            return { ...state, additionfiltered: action.payload }
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        default:
            return state;
    }
}