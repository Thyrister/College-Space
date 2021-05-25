import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCV6dJU60JsqTqc32O2uFc9MZzvDnChWH4",
    authDomain: "quora-cfd9e.firebaseapp.com",
    projectId: "quora-cfd9e",
    storageBucket: "quora-cfd9e.appspot.com",
    messagingSenderId: "246197893559",
    appId: "1:246197893559:web:bb72bc249c79aff9945032",
    measurementId: "G-XY2XFKW9HB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
      const auth = firebase.auth()
      const provider_google = new firebase.auth.GoogleAuthProvider()

      const db = firebaseApp.firestore()

      
  
      export {auth, provider_google};
      export default db;