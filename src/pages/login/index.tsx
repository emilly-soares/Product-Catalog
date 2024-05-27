import React, { FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConnection';
import { useUser } from '../../contexts/UserContext';
import * as S from './style';

export const Login: React.FC = () => {
    const { email, setEmail, password, setPassword, setName } = useUser();
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!email || !password) {
            alert('Preencha todos os campos');
            return;
        }

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            if (user.displayName) {
                setName(user.displayName);
                console.log("Logado com sucesso!");
                navigate('/');
            } else {
                console.log("Nome do usuário não disponível.");
                navigate('/profile');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
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
                        onChange={handleEmailChange}
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="password">Senha:</S.Label>
                    <S.Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </S.FormGroup>
                <S.Button type="submit">Login</S.Button>
            </S.Form>
        </S.Container>
    );
};
