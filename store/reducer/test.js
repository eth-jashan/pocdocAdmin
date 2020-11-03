import Test from "../../model/test"
import { CREATE_TEST, FETCH_TEST } from "../action/test"

const initialState = {
    testList : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE_TEST :
            const newTest = new Test(action.testData.id, action.testData.name, action.testData.description, action.testData.price, action.testData.packageId, action.testData.userId)
            const updatedList = [...state.testList]
            return{
                ...state,
                testList : updatedList.concat(newTest)
            }
        
        case FETCH_TEST : 
            const newList = action.list
            console.log("Fetch Test",newList)
            return{
                ...state,
                testList : newList
            }
        
        default : 
            return state
    }
}