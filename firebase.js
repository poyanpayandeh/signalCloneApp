import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGMBU_WoTrjW0djFS02kmSzy9cfy4M8rw",
  authDomain: "singalclone.firebaseapp.com",
  projectId: "singalclone",
  storageBucket: "singalclone.appspot.com",
  messagingSenderId: "1030027874737",
  appId: "1:1030027874737:web:f3aaf479b3462d69d1ad90",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
