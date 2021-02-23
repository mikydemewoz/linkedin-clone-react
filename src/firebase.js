import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAXa7VOmedpwSISOICQxcg1KS_rhZRsw18",
    authDomain: "linkedin-2ba33.firebaseapp.com",
    projectId: "linkedin-2ba33",
    storageBucket: "linkedin-2ba33.appspot.com",
    messagingSenderId: "933984209456",
    appId: "1:933984209456:web:ee3d3b421feefa488dbbf5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db }
  