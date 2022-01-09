import { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import WideInput from '../../styles/wideInput';
import LoadingButton from "../../LoadingAnimation";

import UserContext from '../../contexts/userContext';

export default function FormLogin() {
    const navigate = useNavigate();
    const { setUserData} = useContext(UserContext);

    const [loginData, setLoginData] = useState( {email: '', password: ''});
    const [loading, setLoading] = useState(false);

    function login(e) {
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            loginData);

        promise.then((response) => {
            setUserData({
                name: response.data.name, 
                image: response.data.image, 
                token: response.data.token 
            });

            navigate('/hoje', { replace: true });
        });

        promise.catch(erro => {
            alert('Email e/ou senha invalidos');
        });
        setLoading(false);
    }
    return (
        <Container>
            <form onSubmit={login}>
                <WideInput placeholder='email'
                    onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                    value={loginData.email}
                    disabled={loading}
                    type='email'
                />

                <WideInput placeholder='senha'
                    onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                    value={loginData.password}
                    disabled={loading}
                    type='password'
                />
            
                <Button type='submit' disabled={loading}>
                    {loading ? <LoadingButton /> : 'Entrar'}
                </Button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    gap: 6px;
    margin-top: 33px;
    padding: 0 36px;
`;

const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca';
    font-size: 21px;
    font-weight: 400;
    color: #FFF;
`;