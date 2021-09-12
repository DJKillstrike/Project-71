import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
   apiKey: "AIzaSyDviQmnq9EVKpVoNEuyIH-cCXC63iuCVhY",
  authDomain: "pro-71-b9ea8.firebaseapp.com",
  projectId: "pro-71-b9ea8",
  storageBucket: "pro-71-b9ea8.appspot.com",
  messagingSenderId: "1046076897763",
  appId: "1:1046076897763:web:aec84217d03817d99c08d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
