
import {  createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthProvider=createContext(null);

const AuthContext = ({children}) => {

    const [user,setuser]=useState(null);
    const [loading,setLoading]=useState(true);

    const emailSignup=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut=()=>{
      setLoading(true);
      return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(CurrentUser)=>{
            if (CurrentUser) {
              setuser(CurrentUser);
              setLoading(false);
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
      loading,
    };
    return <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>;
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node
};