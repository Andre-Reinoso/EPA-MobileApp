import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBGQ5lU2iwjN35W2QkcAJoI4YJ3t4PSbcY',
	authDomain: 'explore-peru-from-abroad.firebaseapp.com',
	projectId: 'explore-peru-from-abroad',
	storageBucket: 'explore-peru-from-abroad.appspot.com',
	messagingSenderId: '1018755399244',
	appId: '1:1018755399244:web:33f63619f17f4b3489fee9',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
