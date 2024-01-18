import * as actionTypes from '../actions/actionTypes';
const initialState = [];
const registerReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            return [...state, action.item];
        default:
            return state;
    }
}
export default registerReducer;





