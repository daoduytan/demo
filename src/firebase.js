import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUyVbPYf5ZWkvomHPjBUUB4zuO0TU3QOs",
    authDomain: "goalcoach-a6a46.firebaseapp.com",
    databaseURL: "https://goalcoach-a6a46.firebaseio.com",
    projectId: "goalcoach-a6a46",
    storageBucket: "goalcoach-a6a46.appspot.com",
    messagingSenderId: "601935079789"
}

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
// export const completeGoals = firebase.database().ref('completeGoals');