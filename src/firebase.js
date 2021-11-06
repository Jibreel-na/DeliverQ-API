// Import the functions you need from the SDKs you need
const { initializeApp }= require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSxF3WpsQRKAUm5-BFeYBU5nGcGA3wNYw",
  authDomain: "deliverq-e3ab2.firebaseapp.com",
  projectId: "deliverq-e3ab2",
  storageBucket: "deliverq-e3ab2.appspot.com",
  messagingSenderId: "720694902454",
  appId: "1:720694902454:web:9f351f6e32171782d27017",
  measurementId: "G-2XDCYX947P"
};

// var admin = require("firebase-admin");

// var serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
// export default firebase;