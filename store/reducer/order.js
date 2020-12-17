import OrderInfo from "../../model/orderInfo"
import { ADD_ORDER, FETCH_ORDER } from "../action/order"

const initialState = {

    orders : []

}

export default (state = initialState, action) =>{

    switch(action.type){

        
        case FETCH_ORDER :
            return{
                ...state,
                orders : action.list
            }

        default:
            return state
    }

}