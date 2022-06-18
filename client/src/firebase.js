import firebase from 'firebase/compat/app';
import 'firebase/compat/database'




const firebaseConfig = {
    apiKey: "AIzaSyCUclBnuwkY61uP6r1BVkgxi0FjL6Em9Wo",
    authDomain: "monthlydues-4c80d.firebaseapp.com",
    projectId: "monthlydues-4c80d",
    storageBucket: "monthlydues-4c80d.appspot.com",
    messagingSenderId: "563678545933",
    appId: "1:563678545933:web:a67df223c6cb861944ad44",
    measurementId: "G-ZFPG0JFXGV"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()