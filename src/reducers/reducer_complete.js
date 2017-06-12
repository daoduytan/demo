import {SET_COMPLETE} from '../constants';


export default (state= [], action) => {
    switch(action.type) {
        case SET_COMPLETE: 
            return action.completeGoals
        default:
            return  state;
    }
}