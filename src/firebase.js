import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyAPhSVV3B1eEQu_WPR6taTe0_eV0JOvE",
  authDomain: "amazn-clone-97da6.firebaseapp.com",
  databaseURL: "https://amazn-clone-97da6.firebaseio.com",
  projectId: "amazn-clone-97da6",
  storageBucket: "amazn-clone-97da6.appspot.com",
  messagingSenderId: "562586906404",
  appId: "1:562586906404:web:f376ec49ccbd42267b0db1",
  measurementId: "G-1WE7K74LVF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
