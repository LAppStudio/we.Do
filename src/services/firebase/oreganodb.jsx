import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBqJC9uJh8infvA9C3j0sdLc4tt5GkWXHU",
    authDomain: "hackeroregano.firebaseapp.com",
    projectId: "hackeroregano",
    storageBucket: "hackeroregano.appspot.com",
    messagingSenderId: "652775433126",
    appId: "1:652775433126:web:72537c193236fd0723e567",
    measurementId: "G-XSENMBMM0R"
  };

var fireaseApp = firebase.initializeApp(firebaseConfig);

export default fireaseApp;