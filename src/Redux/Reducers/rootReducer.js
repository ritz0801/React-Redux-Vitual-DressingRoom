import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import chooseTypeReducer from './chooseTypeReducer';
import tryProductReducer from './tryProductReducer';

const rootReducer = combineReducers({
    //Danh sách state
    categoriesReducer,
    chooseTypeReducer,
    tryProductReducer,
})

export default rootReducer;