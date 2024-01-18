import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import courseReducer from './courseReducer'
const rootReducer=combineReducers({
    register:registerReducer,
    course:courseReducer
});
export default rootReducer;