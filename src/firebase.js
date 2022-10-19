import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIWHwIP_EDyGaE_QoUoZ5JqKVu_0peQwA",
    authDomain: "login-auth-app-3f5e5.firebaseapp.com",
    projectId: "login-auth-app-3f5e5",
    storageBucket: "login-auth-app-3f5e5.appspot.com",
    messagingSenderId: "937327926394",
    appId: "1:937327926394:web:bcc6ef90de9f64d2b4efc3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email,password);
}
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email,password);
}

export function logout(){
return signOut(auth)
}
//custom hook
export function useAuth(){
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
    }, [])

    return currentUser;

}

