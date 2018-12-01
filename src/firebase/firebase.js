import firebase from 'firebase';
import {FIREBASE} from '../constants/keys';

const config = {
    apiKey: {FIREBASE},
    authDomain: 'campus-nav-7bb41.firebaseapp.com',
    databaseURL: 'https://campus-nav-7bb41.firebaseio.com',
    projectId: 'campus-nav-7bb41',
    storageBucket: 'campus-nav-7bb41.appspot.com',
    messagingSenderId: '349341761920',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
