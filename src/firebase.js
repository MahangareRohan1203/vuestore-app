// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// firestore
import { getAnalytics } from "firebase/analytics";

//firestorage for file uploading
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// import { doc, getDoc} from "firebase/firestore"; 

import { getFirestore, collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNFsUS9iORwNTgSJE0V2wC_btAL-sktI",
  authDomain: "vus-js-firstproject.firebaseapp.com",
  projectId: "vus-js-firstproject",
  storageBucket: "vus-js-firstproject.appspot.com",
  messagingSenderId: "57374876803",
  appId: "1:57374876803:web:84be25c24578b3a3e1a7b6",
  measurementId: "G-GGT644LBNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
  app,
  db,
  collection,
  getDocs,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  doc,
  getDoc
};
