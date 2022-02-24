import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgxLbzAk8UeNgAvgjMeysub6QnxsQF_G4",
    authDomain: "discord-clone-85db1.firebaseapp.com",
    projectId: "discord-clone-85db1",
    storageBucket: "discord-clone-85db1.appspot.com",
    messagingSenderId: "427841636069",
    appId: "1:427841636069:web:e5d1cba608b938b699360c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db