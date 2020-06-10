import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC0kwqFMmvggRZc5LIg50wN5jQ6-kjV2h8",
  authDomain: "scale-ecommerce-db.firebaseapp.com",
  databaseURL: "https://scale-ecommerce-db.firebaseio.com",
  projectId: "scale-ecommerce-db",
  storageBucket: "scale-ecommerce-db.appspot.com",
  messagingSenderId: "882933364111",
  appId: "1:882933364111:web:bd48f1e5bf848481d087fa",
  measurementId: "G-FF2Z4PHDC7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;