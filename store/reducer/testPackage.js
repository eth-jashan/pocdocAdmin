import TestPackage from "../../model/testPackage"
import { CREATE_PACKAGE, FETCH_PACKAGE } from "../action/testPackage"

const initialState = {
    packageList : []
}
export default (state = initialState, action)=>{
    switch(action.type){
        case CREATE_PACKAGE :
            const updatedList = [...state.packageList]
            const newPackage = new TestPackage(action.id, action.name, action.description, action.instruction, action.price, action.userId)
            return{
                ...state,
                packageList : updatedList.concat(newPackage)
            }
        
        case FETCH_PACKAGE : 
            const newList = action.list
            return{
                ...state,
                packageList:newList
            }    
            
        default : 
            return state
    }
}
