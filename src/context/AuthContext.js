import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../services/firebase'

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    async function signup(email, password) {
        return await auth.createUserWithEmailAndPassword(email, password);
    }
    async function login(email,password) {
        return await auth.signInWithEmailAndPassword(email,password);
    }
    async function logout(){
        return await auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
