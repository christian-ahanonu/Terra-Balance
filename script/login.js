import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyChoIXJG89Txe9ruwpiRqUek3g57dQEUUU",
    authDomain: "terra-balance-ecommerce.firebaseapp.com",
    projectId: "terra-balance-ecommerce",
    storageBucket: "terra-balance-ecommerce.appspot.com",
    messagingSenderId: "23282003352",
    appId: "1:23282003352:web:4525e3d1ef79e25dd34fed",
    measurementId: "G-T16JVJLQ73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const signInButton = document.querySelector(".login-btn > button");

const signUpBtn = document.querySelector('.signUp');
const loginBtn = document.querySelector('.logIn');
const logOutBtn = document.querySelector('.logOut');

const signUpBtnSmall = document.querySelector('#signUp')
const loginBtnSmall = document.querySelector('#logIn');
const logOutBtnSmall = document.querySelector('#logOut');


// Sign in functionality
signInButton?.addEventListener("click", function(event) {
    event.preventDefault();
    const userSignIn = async() => {
        const signUpEmail = userEmail.value;
        const signUpPassword = userPassword.value;
        signInWithEmailAndPassword(auth, signUpEmail, signUpPassword)

        .then((userCredential) => {
            const user = userCredential.user;
            alert('Signing you in!');
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Invalid Username or Password: " + error.message);
        });
    };
    userSignIn();
});

// Sign out functionality
logOutBtn?.addEventListener("click", () => {
    signOut(auth)
    
    .then(() => {
        window.location.href = "index.html";
        localStorage.removeItem('cart');
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
});

// Sign out functionality
logOutBtnSmall?.addEventListener("click", () => {
    signOut(auth)
    
    .then(() => {
        window.location.href = "index.html";
        localStorage.removeItem('cart');
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
});

// Auth state management
const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
        if (user) {
            // User is signed in
            signUpBtn.style.display = "none";
            loginBtn.style.display = "none";
            logOutBtn.style.display = "flex";
            
            signUpBtnSmall.style.display = "none"
            loginBtnSmall.style.display = "none"
            logOutBtnSmall.style.display = "flex";
        } else {
            // User is signed out
            signUpBtn.style.display = "flex";
            loginBtn.style.display = "flex";
            logOutBtn.style.display = "none";
            
            signUpBtnSmall.style.display = "flex"
            loginBtnSmall.style.display = "flex"
            logOutBtnSmall.style.display = "none";
        }
    });
};

// Initialize auth state check on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
});
