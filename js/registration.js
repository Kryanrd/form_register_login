// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0hP3hpqP3WUQxT1JPTWdmUjv27_Ym864",
  authDomain: "authenticationform-ccb5e.firebaseapp.com",
  projectId: "authenticationform-ccb5e",
  storageBucket: "authenticationform-ccb5e.appspot.com",
  messagingSenderId: "299284464641",
  appId: "1:299284464641:web:5ad2ede86dfa0a75b3ec00"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const email = document.querySelector("#email");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const SignUpButton = document.querySelector("#SignUpButton");
  const userSignUp = async() => {
      const signUpEmail = email.value;
      const signUpPassword = password.value;
      const signUpUsername = username.value;
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword, signUpUsername)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("Your account has been created!");
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage)
      })
  }

  document.querySelector("#SignUpButton").onclick = function() {
    alert("Your account has been created!");
   };
   function alerted () {

   }

  SignUpButton.addEventListener('click', userSignUp);

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

  function showConfrimPassword() {
    const btn = document.querySelector('.confrimpassword__btn')
    const input = document.querySelector('.confrimpassword__input')
    btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            if(input.getAttribute('type')=== 'password') {
                input.setAttribute('type', 'text')
            } else {
                input.setAttribute('type', 'password')
            }
    })
  }
  showConfrimPassword()
  