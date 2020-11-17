import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsZhGvnc9V_Bl9urlZup5R_2fKNTS-HFQ",
    authDomain: "fb-clone-aa9b9.firebaseapp.com",
    databaseURL: "https://fb-clone-aa9b9.firebaseio.com",
    projectId: "fb-clone-aa9b9",
    storageBucket: "fb-clone-aa9b9.appspot.com",
    messagingSenderId: "983430435690",
    appId: "1:983430435690:web:03c88b0a62b881ad7c0b13",
    measurementId: "G-6YKMNG067F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db