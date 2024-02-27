import React, { createContext, useState } from 'react';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const login = (user) => {
        // Implement login logic (e.g., API call, validation)
        setLoggedInUser(user);
    };

    const logout = () => {
        // Implement logout logic (e.g., clear session)
        setLoggedInUser(null);
    };

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
