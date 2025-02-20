// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChoIXJG89Txe9ruwpiRqUek3g57dQEUUU",
  authDomain: "terra-balance-ecommerce.firebaseapp.com",
  projectId: "terra-balance-ecommerce",
  storageBucket: "terra-balance-ecommerce.firebasestorage.app",
  messagingSenderId: "23282003352",
  appId: "1:23282003352:web:4525e3d1ef79e25dd34fed",
  measurementId: "G-T16JVJLQ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const firstName = document.querySelector("#firstname")
const lastName = document.querySelector("#lastname")
const userEmail = document.querySelector("#email")
const userPassword = document.querySelector("#password")
const authForm = document.querySelector("#sign-up")
const submitButton = document.querySelector("#sign-up > button")


// signs-up user when the submit button is clicked
submitButton.addEventListener("click", function(event) {
    event.preventDefault()

    const userSignUp = async() => {
        const signUpEmail = userEmail.value;
        const signUpPassword = userPassword.value;
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)

        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user)
            alert('Your account has been created!')
            window.location.href = "login.html"
        })
        .catch((error) => {
            console.log(error.code + error.message)
            alert(error.message)
        })
    }

    userSignUp();
});