import { ADD_ACCOUNT, LOGIN_ACCOUNT } from "../action/auth"

const initialState = {
    token : null,
    userId : null
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_ACCOUNT :
            return{
                ...state,
                token : action.token,
                userId : action.userId
            }
        
        case LOGIN_ACCOUNT : 
            return{
                ...state,
                token : action.token,
                userId : action.userId
            }

        default : 
            return state
    }
}