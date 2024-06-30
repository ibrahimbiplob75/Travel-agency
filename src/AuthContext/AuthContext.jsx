
import {  createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthProvider=createContext(null);

const AuthContext = ({children}) => {

    const [user,setuser]=useState(null)

    const emailSignup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email, password) => {
       return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut=()=>{
      return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(CurrentUser)=>{
            if (CurrentUser) {
              setuser(CurrentUser);
            } else {
              console.log("Empty user");
            }
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
      emailLogin,
      emailSignup,
      user,
      logOut,
    };
    return <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>;
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node
};