import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.React_App_apiKey,
//   authDomain: process.env.React_App_authDomain,
//   projectId: process.env.React_App_projectId,
//   storageBucket: process.env.React_App_storageBucket,
//   messagingSenderId: process.env.React_App_messagingSenderId,
//   appId: process.env.React_App_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC6IihkMfwumeUKAjps-aeGmx_sVkYBb0I",
  authDomain: "file-storr.firebaseapp.com",
  projectId: "file-storr",
  storageBucket: "file-storr.appspot.com",
  messagingSenderId: "855780096104",
  appId: "1:855780096104:web:c828cc8e3c02dfc2b663dd",
  measurementId: "G-3V8YWS0ZHK"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
