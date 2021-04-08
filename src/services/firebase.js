import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyDPgmkBf2qCiWivIybjDbD_RUcnKOwkWcw",
    authDomain: "endlesstv.firebaseapp.com",
    databaseURL: "https://endlesstv-default-rtdb.firebaseio.com",
    projectId: "endlesstv",
    storageBucket: "endlesstv.appspot.com",
    messagingSenderId: "673035889001",
    appId: "1:673035889001:web:ffb3befcde496b4ba4b5f8"
})

export const auth = app.auth();
export const storage = firebase.storage();
export const emailAuthProvider = firebase.auth.EmailAuthProvider;

export default app;