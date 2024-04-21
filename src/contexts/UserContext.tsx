import { ReactNode, createContext, useState, useContext } from "react";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}