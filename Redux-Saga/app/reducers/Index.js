import {combineReducers }from'redux';
import {movieState} from './MovieReducer';
const rootReducer=combineReducers({
   // console.log("Lỗi tại  redeucer")
    movieState,
})

export default rootReducer;
