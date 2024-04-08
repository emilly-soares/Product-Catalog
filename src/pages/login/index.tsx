import React, { FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConnection';
import * as S from './style';

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
                navigate('/produtos');
            })
            .catch((error) => {
                console.log('error');
                console.log(error);
            });
    };

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Title>Login</S.Title>
                <S.FormGroup>
                    <S.Label htmlFor="email">Email de usuário:</S.Label>
                    <S.Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="password">Senha:</S.Label>
                    <S.Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </S.FormGroup>
                <S.Button type="submit">Login</S.Button>
            </S.Form>
        </S.Container>
    );
};
