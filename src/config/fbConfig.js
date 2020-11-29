import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCH1a1L7NLBBj3oKr5Q9GhhXymmDKt3d_Q",
    authDomain: "net-ninja-marioplan-121a5.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-121a5.firebaseio.com",
    projectId: "net-ninja-marioplan-121a5",
    storageBucket: "net-ninja-marioplan-121a5.appspot.com",
    messagingSenderId: "741423305965",
    appId: "1:741423305965:web:8a41c3355b45ef601368e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;