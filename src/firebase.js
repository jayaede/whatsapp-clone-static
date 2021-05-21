import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCChOp1E0yQCtboAF-4KaXnOKLh1_jGcp4",
    authDomain: "whatsapp-clone-ee935.firebaseapp.com",
    projectId: "whatsapp-clone-ee935",
    storageBucket: "whatsapp-clone-ee935.appspot.com",
    messagingSenderId: "368036687142",
    appId: "1:368036687142:web:315830838f9bb5ce09e5e7",
    measurementId: "G-P8KBVKCN9G"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;