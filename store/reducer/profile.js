import PageInfo from "../../model/pageInfo"
import { CREATE_PROFILE, FETCH_PROFILE } from "../action/profile"

const initialState = {
    profiles : []
}

export default (state = initialState, action)=>{

    switch(action.type){

        case CREATE_PROFILE :
            const updatedList = [...state.profiles]
            const profile = new PageInfo(action.profileData.id, action.profileData.name, action.profileData.address, action.profileData.locality, action.profileData.city, action.profileData.propId, action.profileData.coordinates)
            return{
                ...state,
                profiles : updatedList.concat(profile)
            }

        case FETCH_PROFILE :
            const updatedArray = action.list
            return{
                ...state,
                profiles : updatedArray
            }
        
        default : 
            return state
    }
}