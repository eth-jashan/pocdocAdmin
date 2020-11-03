import PageInfo from "../../model/pageInfo"

export const CREATE_PROFILE = 'CREATE_PROFILE'
export const FETCH_PROFILE = 'FETCH_PROFILE'

export const createProfile = ( name, address, locality, city,  coordinates) => {

    return async (dispatch, getState) => {

        const userId = getState().auth.userId
        const token = getState().auth.token

        const response = await fetch(`https://pocdocadmin.firebaseio.com/profile.json?auth=${token}`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                name : name,
                address : address,
                locality : locality,
                city : city,
                coordinates : coordinates,
                propId : userId
            })
        })
        const resData = await response.json()
        console.log(resData)
        dispatch({type:CREATE_PROFILE, profileData : {id:resData.name, name : name, address : address, locality : locality, city : city, coordinates:coordinates, propId : userId}})
    }
}

export const fetchProfile = () => {

    return async (dispatch, getState) => {

        const userId = getState().auth.userId

        const response = await fetch(`https://pocdocadmin.firebaseio.com/profile.json?auth=${token}`)
        const resData = await response.json()
        const list = []
        
        for (const key in resData){
            list.push(new PageInfo(key, resData[key].name, resData[key].address,  resData[key].locality, resData[key].city, resData[key].propId, resData[key].coordinates))
        }
        dispatch({ type:FETCH_PROFILE, list:list.filter(x=>x.propId === userId) })
    }
}