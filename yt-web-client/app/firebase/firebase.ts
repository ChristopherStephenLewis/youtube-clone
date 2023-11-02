// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA1DxmputP-D4wkpYq_d_KyrXHhhiBCriY',
    authDomain: 'clone-c5bb2.firebaseapp.com',
    projectId: 'clone-c5bb2',
    // storageBucket: 'clone-c5bb2.appspot.com', we already have our own
    // messagingSenderId: '796080766357', we have our own messaging/pub sub
    appId: '1:796080766357:web:cb32a178b913b09c1cca9c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// The functions below are so we don't have to expose the auth variable outside of this file.

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider()); // we can use other providers such as GitHub
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscrive callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}
