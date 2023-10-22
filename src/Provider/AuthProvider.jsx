import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../componets/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user ,setUser]  =useState(null);
const [loading ,setLoading]=   useState(true);

const createUser =(email,password)=>{
    setLoading
    return createUserWithEmailAndPassword(auth,email,password);
}
const logout = ()=>{
    return signOut (auth)
}


useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth ,currentUser =>{
        console.log('current user', currentUser)
        setUser(currentUser)
    })
    return () =>{
        unSubscribe();
    }
},[])


const userInfo ={
    user,
    loading,
    createUser,
    logout
}

return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;