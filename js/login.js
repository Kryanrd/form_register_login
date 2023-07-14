// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0hP3hpqP3WUQxT1JPTWdmUjv27_Ym864",
  authDomain: "authenticationform-ccb5e.firebaseapp.com",
  projectId: "authenticationform-ccb5e",
  storageBucket: "authenticationform-ccb5e.appspot.com",
  messagingSenderId: "299284464641",
  appId: "1:299284464641:web:5ad2ede86dfa0a75b3ec00"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const email = document.querySelector("#email");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const SignInButton = document.querySelector("#SignInButton");
  const userSignIn = async() => {
      const signInEmail = email.value;
      const signInPassword = password.value;
      const signInUsername = username.value;
      signInWithEmailAndPassword(auth, signInEmail, signInPassword, signInUsername)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("You have signed in successfully!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}

  document.querySelector("#SignInButton").onclick = function() {
    alert("You have signed in successfully!");
   };
   function alerted () {

   }
  SignInButton.addEventListener('click', userSignIn);

  function showPassword() {
    const btn = document.querySelector('.password__btn')
    const input = document.querySelector('.password__input')
    btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            if(input.getAttribute('type')=== 'password') {
                input.setAttribute('type', 'text')
            } else {
                input.setAttribute('type', 'password')
            }
    })
  }
  showPassword()