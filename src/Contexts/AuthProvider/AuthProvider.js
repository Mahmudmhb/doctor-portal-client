import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContexts = createContext()

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase()
    return (
        <AuthContexts.Provider value={AllContexts}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;