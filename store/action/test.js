import Test from "../../model/test";
import TestPackage from "../../model/testPackage";

export const CREATE_TEST = 'CREATE_TEST';
export const FETCH_TEST = 'FETCH_TEST';

export const createPAckage = (name, description, packageId, price) => {
    return async (dispatch, getState) => {

        const userId = getState().auth.userId
        const token = getState().auth.token

        const response = await fetch(`https://pocdocadmin.firebaseio.com/tests.json?auth=${token}`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name : name,
                description : description,
                packageId : packageId,
                price : price,
                userid : userId
            })
        })
        const resData = await response.json()
        dispatch({type:CREATE_TEST, testData:{id:resData.name, name:name, description : description, packageId : packageId, price : price, userid : userId}})
    }
}

export const fetchPackage = () => {
    return async (dispatch, getState) => {
        
        const token = getState().auth.token
        const userId = getState().auth.userId
        const response = await fetch(`https://pocdocadmin.firebaseio.com/tests.json?auth=${token}`)
        const resData = await response.json()
        const list = []
        
        for (const key in resData){
            list.push(new Test(key, resData[key].name, resData[key].description, resData[key].price,resData[key].packageId, resData[key].userId))
        }
        dispatch({type:FETCH_TEST, list:list})
    }
}