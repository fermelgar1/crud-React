import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDetOzTpnrYqip5oIQzxnUElDSQurTVyaU",
    authDomain: "crud-react-57e8d.firebaseapp.com",
    projectId: "crud-react-57e8d",
    storageBucket: "crud-react-57e8d.appspot.com",
    messagingSenderId: "775358584256",
    appId: "1:775358584256:web:710b16171cc9de6898e425"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export { firebase }