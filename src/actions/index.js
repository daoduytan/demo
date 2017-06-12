import {SIGNED_IN, FETCH_DATA} from '../constants';
import {goalRef}  from '../firebase';

export function logUser(email) {
    return {
        type : SIGNED_IN,
        email 
    }
}

export function getData() {
    return (dispatch) => {
        goalRef.on('value', snap => {
            let goals = [];

            snap.forEach(goal => {
                const serverKey = goal.key;
                const {email, title, note, level, isComplete} =  goal.val();
                goals.push({email, title, note, level, isComplete, serverKey});
            })
            dispatch({type: FETCH_DATA, goals})
        })
    }
}

// export function setComplete(completeGoals) {
//     return {
//         type: SET_COMPLETE,
//         completeGoals
//     }
// }