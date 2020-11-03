import TestPackage from "../../model/testPackage";

export const CREATE_PACKAGE = 'CREATE_PACKAGE';
export const FETCH_PACKAGE = 'FETCH_PACKAGE';

export const createPAckage = (name, description, instruction, price) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const token = getState().auth.token
        const response = await fetch(`https://pocdocadmin.firebaseio.com/packages.json?auth=${token}`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name : name,
                description : description,
                instruction : instruction,
                price:price,
                receiverId : userId
            })
        })
        const resData = await response.json()
        dispatch({type:CREATE_PACKAGE, testData:{id:resData.name, name:name, description : description, instruction : instruction, price:price, receiverId : userId}})
    }
}

export const fetchPackage = () => {
    return async (dispatch, getState) => {
        
        const userId = getState().auth.userId
        const token = getState().auth.token
        const response = await fetch(`https://pocdocadmin.firebaseio.com/packages.json?auth=${token}`)
        const resData = await response.json()
        const list = []
        for (const key in resData){
            list.push(new TestPackage(key, resData[key].name, resData[key].description, resData[key].instruction, resData[key].price, resData[key].receiverId))
        }
        dispatch({type:FETCH_PACKAGE, list:list.filter(x=>x.receiverId === userId)})
    }
}