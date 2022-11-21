import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8thb6UCTSjkIDHEI3akPJ6hyjKN4A6Vk",
    authDomain: "socialize-d44d8.firebaseapp.com",
    projectId: "socialize-d44d8",
    storageBucket: "socialize-d44d8.appspot.com",
    messagingSenderId: "554922155999",
    appId: "1:554922155999:web:b014e8615127ad5f652e6a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default {app, db};