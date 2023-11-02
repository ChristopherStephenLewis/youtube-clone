'use client';

import { User } from 'firebase/auth';
import { signInWithGoogle, signOut } from '../firebase/firebase';

// change font later to Roboto, Arial, sans-serif

interface SignInProps {
    user: User | null;
}

export default function SignIn({ user }: SignInProps) {
    return (
        <>
            {' '}
            {user ? (
                <button
                    className="bg-gray-200 inline-block border border-solid border-gray-500 text-blue-700 px-5 py-3 rounded-3xl font-medium text-sm cursor-pointer font-serif hover:border-transparent hover:bg-sky-200"
                    onClick={signOut}
                >
                    Sign Out
                </button>
            ) : (
                <button
                    className="bg-gray-200 inline-block border border-solid border-gray-500 text-blue-700 px-5 py-3 rounded-3xl font-medium text-sm cursor-pointer font-serif hover:border-transparent hover:bg-sky-200"
                    onClick={signInWithGoogle}
                >
                    Sign In
                </button>
            )}
        </>
    );
}
