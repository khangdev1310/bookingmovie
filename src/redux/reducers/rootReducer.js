import {combineReducers} from 'redux';
import {signReducer, signupReducer} from '../reducers/userSign';
const rootReducer = combineReducers({
    userSign: signReducer,
    signUp: signupReducer,
})



export default rootReducer