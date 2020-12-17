export const FETCH_ORDER = 'FETCH_ORDER'
import OrderInfo from "../../model/orderInfo"

export const fetchOrder = () => {

    return async (dispatch, getState) => {

        const response = await fetch(`https://pocdocadmin.firebaseio.com/order.json?`)
        const resData = await response.json()

        const orderList = []

        for (const key in resData){

            orderList.push(new OrderInfo(key, resData[key].name,  resData[key].number,  resData[key].address,  resData[key].propId,  resData[key].custId,  resData[key].cartItem,  resData[key].cartTotal, resData[key].status))

        }

        

        dispatch({type:FETCH_ORDER, list: orderList})
    }

}

export const changeStatus = (id, status) => {

    //console.log("id :", id, 'status :', status)

    return async (dispatch, getState)=>{

        await fetch(`https://pocdocadmin.firebaseio.com/order/${id}.json?`,{
            method : 'PATCH',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                status : status
            })
        })

    }

}