import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    deleteUser,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loginGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const loginGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // ✅ Delete current signed-in user (with re-authentication)
    const deleteCurrentUser = (email, password) => {
        const currentUser = auth.currentUser;

        if (currentUser && currentUser.email === email) {
            const credential = EmailAuthProvider.credential(email, password);
            setLoading(true);
            return reauthenticateWithCredential(currentUser, credential)
                .then(() => deleteUser(currentUser))
                .finally(() => setLoading(false));
        } else {
            return Promise.reject(new Error("No signed-in user or email mismatch."));
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        forgetPassword,
        updateUserProfile,
        loginGoogle,
        loginGithub,
        deleteCurrentUser, // ✅ Expose in context
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;