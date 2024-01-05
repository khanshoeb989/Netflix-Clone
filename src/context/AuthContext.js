import { useContext, createContext, useEffect, useState } from "react";
import {auth, db} from '../Firebase'
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged } from "firebase/auth"; 
    import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext()



export function AuthContextProvider({children}){

    const [user,setuser] = useState({})

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
      }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      });

    return (
        <AuthContext.Provider value ={{signUp,user,logIn,logout}}>
            {children}
            
        </AuthContext.Provider>
    )

}

export function UserAuth (){
    return useContext(AuthContext)
}



