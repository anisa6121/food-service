import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';




export const AuthContext = createContext();

const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const [loading, setLoading] = useState(true);


	const createUser = (email, password) => {
		setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
    }   


     const signIn = (email, password) => {
	setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
    };

        const logOut = () => {
			setLoading(true);
			return signOut(auth);
		};
    
        const updateUserProfile = (profile) => {
			setLoading(true);
			return updateProfile(auth.currentUser, profile);
    };
    
       const resetPassword = (email) => {
	
		return sendPasswordResetEmail(auth, email);
	};


	const googleSignIn = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider);
	}
    
    useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("user inside stateChange", currentUser);

			setUser(currentUser);
			setLoading(false)
		});

		return () => unsubscribe();
    }, []);
  
	const authInfo = {
		user,
		loading,
		createUser,
		logOut,
		signIn,
		updateUserProfile,
		resetPassword,
		googleSignIn
	};

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		
		</AuthContext.Provider>
	);
};

export default AuthProvider;