import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSYghZ0hVcIRHiOk4kuIVfDg75wWwRh3s",
    authDomain: "todolist-4753b.firebaseapp.com",
    databaseURL: "https://todolist-4753b.firebaseio.com",
    projectId: "todolist-4753b",
    storageBucket: "todolist-4753b.appspot.com",
    messagingSenderId: "571092621395",
    appId: "1:571092621395:web:f4ffb946bf9b4c17f34ea6"
  };
  // Initialize Firebase
  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();