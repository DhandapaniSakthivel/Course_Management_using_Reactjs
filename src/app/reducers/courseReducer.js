import * as actionTypes from '../actions/actionTypes';
const initialState = [];
const courseReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_TO_COURSE:
            return [...state, action.item];
        default:
            return state;
    }
}
export default courseReducer;





