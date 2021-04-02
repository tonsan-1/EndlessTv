import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyDPgmkBf2qCiWivIybjDbD_RUcnKOwkWcw",
    authDomain: "endlesstv.firebaseapp.com",
    projectId: "endlesstv",
    storageBucket: "endlesstv.appspot.com",
    messagingSenderId: "673035889001",
    appId: "1:673035889001:web:ffb3befcde496b4ba4b5f8"
})

export const auth = app.auth();
export const storage = firebase.storage();
export default app