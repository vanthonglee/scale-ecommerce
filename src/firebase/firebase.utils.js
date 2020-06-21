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

export const createUserProfileDocument = async (userAuth, addionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData
      })
    } catch (error) {
      console.log('error create user', error.message);
    }
  }

  return userRef;
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;