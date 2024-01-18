import * as actionTypes from './actionTypes';
export const registerUser=(item)=>{
    return{
        type:actionTypes.REGISTER_USER,
        item:{...item} 
    }
}
