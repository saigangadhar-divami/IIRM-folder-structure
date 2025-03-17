import { createContext, useState, useEffect } from "react";
import { User, AuthContextType } from "../constants";
import { config } from "../constants/index"; // Import local config data

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string) => {
        const userData = config.data.users.find((u) => u.email === email);
        
        if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", config.data.token);
            setUser(userData as User);
        } else {
            alert("Invalid Email");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        // Load user from localStorage on initial render
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
