import React, { FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConnection';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (email === '' || password === '') {
            alert('Preencha todos os campos');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("logado");
                //navigate('/produto/5');
            })
            .catch((error) => {
                console.log('error');
                console.log(error);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email de usuário:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
