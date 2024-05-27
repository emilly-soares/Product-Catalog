import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserContextData {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<UserContextData>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
