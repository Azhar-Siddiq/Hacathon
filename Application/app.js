import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiGAuii_Zu-WKGj-qmmJHstiRIaJCNgeA",
  authDomain: "chat-app-b1b3a.firebaseapp.com",
  projectId: "chat-app-b1b3a",
  storageBucket: "chat-app-b1b3a.appspot.com",
  messagingSenderId: "1002548599730",
  appId: "1:1002548599730:web:7a3922637b6f79d99be2ab"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const signUpBtn = document.querySelector('#signUpBtn')
signUpBtn.addEventListener('click', signUpForm);

async function signUpForm(e){
  try{
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

  const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
  console.log(user, "user");
  
  }
  catch(error){
    console.log(error.message, "error");
    alert(error.message)
  }
  window.location.replace('./index.html')
}

const loginBtn = document.querySelector('#loginBtn')
loginBtn.addEventListener('click', userLoginForm);

async function userLoginForm(e){
    try{
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log(userCredential, "user logged in");
    }
    catch(error){
        console.log(error.message, "error");
        alert(error.message);
    }
    window.location.replace('./dashboard.html');
}

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getAuth, 
  createUserWithEmailAndPassword
};
