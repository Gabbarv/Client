// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBksrX-X0zwamYhWs5bvIi_x0Qs7OKPOnQ",
  authDomain: "a2zsabkuch-689e7.firebaseapp.com",
  projectId: "a2zsabkuch-689e7",
  storageBucket: "a2zsabkuch-689e7.appspot.com",
  messagingSenderId: "704974745861",
  appId: "1:704974745861:web:f6bebdf377a98378ef076c"
  
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
export {auth , firebase,db,storage};