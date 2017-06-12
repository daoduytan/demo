import {SIGNED_IN} from '../constants';

let user = {
    email: null
}

export default (state = user, action) => {
    const {email} = action;
    switch(action.type) {
        case SIGNED_IN:
            return {email};
            
        default:    
            return state;
    }
}